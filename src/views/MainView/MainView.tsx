import styles from "./MainView.module.scss";
import { fetchWeatherApi } from "openmeteo";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { setValues } from "../../state/slices/currentWeatherSlice";
import { useEffect } from "react";
import { setHours } from "../../state/slices/hourlyWeatherSlice";
import { setDays } from "../../state/slices/dailyWeatherSlice";
import { OverViewSection } from "../../components/Main View/OverviewSection/OverViewSection";

export function MainView() {
  const currentWeatherParams = {
    latitude: 51.5085,
    longitude: -0.1257,
    models: "ukmo_seamless",
    current: ["temperature_2m"],
  };
  const url = "https://api.open-meteo.com/v1/forecast";

  const {
    data: currentWeather,
    // isPending,
    // isError,
  } = useQuery({
    queryKey: ["current-weather"],
    queryFn: async () => {
      const response = await fetchWeatherApi(url, currentWeatherParams);
      const data = response[0];
      const current = data.current()!;
      const utcOffsetSeconds = data.utcOffsetSeconds();

      return {
        current: {
          time: new Date(
            (Number(current.time()) + utcOffsetSeconds) * 1000
          ).toISOString(),
          temperature2m: current.variables(0)!.value(),
        },
      };
    },
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
      const response = await fetchWeatherApi(url, hourlyWeatherParams);
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
      const response = await fetchWeatherApi(url, dailyWeatherParams);
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
  const selectHourlyWeatherValues = useAppSelector(
    (state) => state.hourlyWeather.hours
  );
  const selectDailyWeatherValues = useAppSelector(
    (state) => state.dailyWeather.days
  );

  return (
    <div className={styles["main-view"]}>
      <OverViewSection></OverViewSection>

      <div className={styles["hourly-section"]}>
        <ul className={styles["hourly-weather-list"]}>
          {selectHourlyWeatherValues.map((hourlyWeatherItem, i) => {
            if (i <= 7) {
              return (
                <li key={i} className={styles["hourly-weather-item"]}>
                  <h4>{hourlyWeatherItem.time}</h4>
                  <div>{hourlyWeatherItem.icon}</div>
                  <h4>{hourlyWeatherItem.temperature}°C</h4>
                </li>
              );
            } else {
              return;
            }
          })}
        </ul>
      </div>

      <div className={styles["daily-section"]}>
        <ul className={styles["daily-weather-list"]}>
          {selectDailyWeatherValues.map((dailyWeatherItem, i) => {
            return (
              <li key={i} className={styles["daily-weather-item"]}>
                <div className={styles["daily-weather-date"]}>
                  <h3>
                    {dailyWeatherItem.weekday[0].toLocaleUpperCase() +
                      dailyWeatherItem.weekday.slice(1)}
                  </h3>
                  <p>{dailyWeatherItem.date}</p>
                </div>
                <div>{dailyWeatherItem.icon}</div>
                <h3>{dailyWeatherItem.lowestTemperature}°C</h3>
                <div>*Temperature Range*</div>
                <h3>{dailyWeatherItem.highestTemperature}°C</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
