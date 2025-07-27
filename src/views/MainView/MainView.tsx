import {
  IDailyWeatherItem,
  IHourlyWeatherItem,
} from "../../type-interfaces/interfaces";
import styles from "./MainView.module.scss";
import { fetchWeatherApi } from "openmeteo";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { setValues } from "../../state/slices/currentWeatherSlice";
import { useEffect } from "react";
import { setHours } from "../../state/slices/hourlyWeatherSlice";

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

  useEffect(() => {
    if (currentWeather?.current) {
      dispatch(setValues(currentWeather.current));
    }

    if (hourlyWeather?.hourly) {
      dispatch(setHours(hourlyWeather));
    }
  }, [currentWeather, hourlyWeather]);

  const dispatch = useAppDispatch();
  const selectCurrentWeatherValues = useAppSelector(
    (state) => state.currentWeather
  );
  const selectHourlyWeatherValues = useAppSelector(
    (state) => state.hourlyWeather.hours
  );

  const mockDailyWeatherItems: IDailyWeatherItem[] = [
    {
      date: "20/06/2025",
      weekday: "monday",
      icon: "*ICON*",
      lowestTemperature: 20,
      highestTemperature: 28,
    },
    {
      date: "21/06/2025",
      weekday: "tuesday",
      icon: "*ICON*",
      lowestTemperature: 19,
      highestTemperature: 25,
    },
    {
      date: "22/06/2025",
      weekday: "wednesday",
      icon: "*ICON*",
      lowestTemperature: 22,
      highestTemperature: 30,
    },
    {
      date: "23/06/2025",
      weekday: "thursday",
      icon: "*ICON*",
      lowestTemperature: 22,
      highestTemperature: 27,
    },
    {
      date: "24/06/2025",
      weekday: "friday",
      icon: "*ICON*",
      lowestTemperature: 21,
      highestTemperature: 25,
    },
    {
      date: "25/06/2025",
      weekday: "saturday",
      icon: "*ICON*",
      lowestTemperature: 20,
      highestTemperature: 26,
    },
    {
      date: "26/06/2025",
      weekday: "sunday",
      icon: "*ICON*",
      lowestTemperature: 23,
      highestTemperature: 28,
    },
    {
      date: "27/06/2025",
      weekday: "monday",
      icon: "*ICON*",
      lowestTemperature: 22,
      highestTemperature: 33,
    },
    {
      date: "28/06/2025",
      weekday: "tuesday",
      icon: "*ICON*",
      lowestTemperature: 23,
      highestTemperature: 31,
    },
    {
      date: "29/06/2025",
      weekday: "wednesday",
      icon: "*ICON*",
      lowestTemperature: 22,
      highestTemperature: 34,
    },
  ];

  return (
    <div className={styles["main-view"]}>
      <div className={styles["overview-section"]}>
        <h2 className={styles["overview-location"]}>Maidenhead</h2>
        <h1 className={styles["overview-temperature"]}>
          {Number(selectCurrentWeatherValues.temperature2m.toFixed(2))}°C
        </h1>

        <h3 className={styles["overview-condition"]}>Sunny with clouds</h3>
      </div>

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
          {mockDailyWeatherItems.map((dailyWeatherItem, i) => {
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
                <h3>{dailyWeatherItem.lowestTemperature}</h3>
                <div>*Temperature Range*</div>
                <h3>{dailyWeatherItem.highestTemperature}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
