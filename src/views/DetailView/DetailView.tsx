import styles from "./DetailView.module.scss";
import { Navigation } from "../../components/Detail View/Navigation/Navigation";
import { HourlyWeatherItem } from "../../components/Detail View/HourlyWeatherItem/HourlyWeatherItem";

export function DetailView() {
  return (
    <div className={styles["detail-view"]}>
      <Navigation />
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
      <div className={styles["weather-metrics"]}></div>
    </div>
  );
}
