import { useAppSelector } from "../../../state/hooks";
import styles from "./HourlyWeatherSection.module.scss";

export function HourlyWeatherSection() {
  const selectHourlyWeatherValues = useAppSelector(
    (state) => state.hourlyWeather.hours
  );

  return (
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
  );
}
