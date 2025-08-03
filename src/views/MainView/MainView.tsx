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
import {
  fetchCurrentWeather,
  fetchDailyWeather,
  fetchHourlyWeather,
} from "../../api/weather-api-service";
import {
  CURRENT_WEATHER_PARAMS,
  DAILY_WEATHER_PARAMS,
  HOURLY_WEATHER_PARAMS,
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

  const {
    data: hourlyWeather,
    // isPending,
    // isError
  } = useQuery({
    queryKey: ["hourly-weather"],
    queryFn: async () =>
      fetchHourlyWeather(WEATHER_API_URL, HOURLY_WEATHER_PARAMS),
  });

  const {
    data: dailyWeather,
    // isPending
    // isError
  } = useQuery({
    queryKey: ["daily-weather"],
    queryFn: async () =>
      fetchDailyWeather(WEATHER_API_URL, DAILY_WEATHER_PARAMS),
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
