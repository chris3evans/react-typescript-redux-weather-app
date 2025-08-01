import styles from "./MainView.module.scss";
import { fetchWeatherApi } from "openmeteo";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../../state/hooks";
import { setValues } from "../../state/slices/currentWeatherSlice";
import { useEffect } from "react";
import { setHours } from "../../state/slices/hourlyWeatherSlice";
import { setDays } from "../../state/slices/dailyWeatherSlice";
import { OverViewSection } from "../../components/Main View/OverviewSection/OverViewSection";
import { HourlyWeatherSection } from "../../components/Main View/HourlyWeatherSection/HourlyWeatherSection";
import { DailyWeatherSection } from "../../components/Main View/DailyWeatherSection/DailyWeatherSection";
import { fetchCurrentWeather } from "../../api/weather-api-service";
import {
  CURRENT_WEATHER_PARAMS,
  WEATHER_API_URL,
} from "../../api/weather-api-parameters";

export function MainView() {
  const {
    data: currentWeather,
    // isPending,
    // isError,
  } = useQuery({
    queryKey: ["current-weather"],
    queryFn: async () =>
      fetchCurrentWeather(WEATHER_API_URL, CURRENT_WEATHER_PARAMS),
  });

  const hourlyWeatherParams = {
    latitude: 51.5085,
    longitude: -0.1257,
    hourly: "temperature_2m",
    models: "ukmo_seamless",
  };

  const {
    data: hourlyWeather,
    // isPending,
    // isError
  } = useQuery({
    queryKey: ["hourly-weather"],
    queryFn: async () => {
      const response = await fetchWeatherApi(
        WEATHER_API_URL,
        hourlyWeatherParams
      );
      const data = response[0];
      const hourly = data.hourly()!;
      const utcOffsetSeconds = data.utcOffsetSeconds();

      return {
        hourly: {
          time: [
            ...Array(
              (Number(hourly.timeEnd()) - Number(hourly.time())) /
                hourly.interval()
            ),
          ].map((_, i) =>
            new Date(
              (Number(hourly.time()) +
                i * hourly.interval() +
                utcOffsetSeconds) *
                1000
            ).toISOString()
          ),
          temperature2m: Array.from(hourly.variables(0)!.valuesArray()!),
        },
      };
    },
  });

  const dailyWeatherParams = {
    latitude: 52.52,
    longitude: 13.41,
    daily: ["temperature_2m_max", "temperature_2m_min"],
  };

  const {
    data: dailyWeather,
    // isPending
    // isError
  } = useQuery({
    queryKey: ["daily-weather"],
    queryFn: async () => {
      const response = await fetchWeatherApi(
        WEATHER_API_URL,
        dailyWeatherParams
      );
      const data = response[0];
      const daily = data.daily()!;
      const utcOffsetSeconds = data.utcOffsetSeconds();

      return {
        daily: {
          time: [
            ...Array(
              (Number(daily.timeEnd()) - Number(daily.time())) /
                daily.interval()
            ),
          ].map((_, i) =>
            new Date(
              (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
                1000
            ).toISOString()
          ),
          temperature_2m_max: Array.from(
            daily
              .variables(0)!
              .valuesArray()!
              .map((num) => num)
          ),
          temperature_2m_min: Array.from(
            daily
              .variables(1)!
              .valuesArray()!
              .map((num) => num)
          ),
        },
      };
    },
  });

  useEffect(() => {
    if (currentWeather?.current) {
      dispatch(setValues(currentWeather.current));
    }
    if (hourlyWeather?.hourly) {
      dispatch(setHours(hourlyWeather.hourly));
    }
    if (dailyWeather?.daily) {
      dispatch(setDays(dailyWeather.daily));
    }
  }, [currentWeather, hourlyWeather, dailyWeather]);

  const dispatch = useAppDispatch();

  return (
    <div className={styles["main-view"]}>
      <OverViewSection></OverViewSection>
      <HourlyWeatherSection></HourlyWeatherSection>
      <DailyWeatherSection></DailyWeatherSection>
    </div>
  );
}
