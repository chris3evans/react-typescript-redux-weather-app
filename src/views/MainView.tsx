import { useEffect, useState } from "react";
import {
  IDailyWeatherItem,
  IHourlyWeatherItem,
} from "../type-interfaces/interfaces";
import styles from "./MainView.module.scss";
import { fetchWeatherApi } from "openmeteo";

export function MainView() {
  const [overviewTemperatureC, setOverviewTemperatureC] = useState<number>(0);

  useEffect(() => {
    const params = {
      latitude: 51.5085,
      longitude: -0.1257,
      models: "ukmo_seamless",
      current: [
        "temperature_2m",
        "precipitation",
        "rain",
        "cloud_cover",
        "wind_speed_10m",
        "wind_direction_10m",
        "showers",
        "snowfall",
        "relative_humidity_2m",
      ],
    };
    const url = "https://api.open-meteo.com/v1/forecast";

    fetchWeatherApi(url, params)
      .then((data) => {
        const response = data[0];
        const current = response.current()!;
        const utcOffsetSeconds = response.utcOffsetSeconds();

        const weatherData = {
          current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0)!.value(),
            precipitation: current.variables(1)!.value(),
            rain: current.variables(2)!.value(),
            cloudCover: current.variables(3)!.value(),
            windSpeed10m: current.variables(4)!.value(),
            windDirection10m: current.variables(5)!.value(),
            showers: current.variables(6)!.value(),
            snowfall: current.variables(7)!.value(),
            relativeHumidity2m: current.variables(8)!.value(),
          },
        };
        setOverviewTemperatureC(
          Number(weatherData.current.temperature2m.toFixed(2))
        );
        console.log(weatherData, "data recieved");
      })
      .catch((error) => {
        console.error("Could not retrieve the weather data", error);
      });
  });
  const mockHourlyWeatherItems: IHourlyWeatherItem[] = [
    {
      temperature: 20,
      icon: "*ICON*",
      time: "09:00",
    },
    {
      temperature: 22,
      icon: "*ICON*",
      time: "10:00",
    },
    {
      temperature: 23,
      icon: "*ICON*",
      time: "11:00",
    },
    {
      temperature: 25,
      icon: "*ICON*",
      time: "12:00",
    },
    {
      temperature: 28,
      icon: "*ICON*",
      time: "13:00",
    },
    {
      temperature: 30,
      icon: "*ICON*",
      time: "14:00",
    },
    {
      temperature: 29,
      icon: "*ICON*",
      time: "15:00",
    },
  ];

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
          {overviewTemperatureC}°C
        </h1>
        <h3 className={styles["overview-condition"]}>Sunny with clouds</h3>
      </div>

      <div className={styles["hourly-section"]}>
        <ul className={styles["hourly-weather-list"]}>
          {mockHourlyWeatherItems.map((hourlyWeatherItem, i) => {
            return (
              <li key={i} className={styles["hourly-weather-item"]}>
                <h4>{hourlyWeatherItem.time}</h4>
                <div>{hourlyWeatherItem.icon}</div>
                <h4>{hourlyWeatherItem.temperature}</h4>
              </li>
            );
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
