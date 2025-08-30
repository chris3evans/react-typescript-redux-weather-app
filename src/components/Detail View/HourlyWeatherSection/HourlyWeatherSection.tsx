import { HourlyWeatherItem } from "../HourlyWeatherItem/HourlyWeatherItem";
import styles from "./HourlyWeatherSection.module.scss";

export function HourlyWeatherSection() {
  return (
    <ul className={styles["hourly-weather-list"]}>
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
      <HourlyWeatherItem />
    </ul>
  );
}
