import { useAppSelector } from "../../../state/hooks";
import styles from "./DailyWeatherSection.module.scss";

export function DailyWeatherSection() {
  const selectDailyWeatherValues = useAppSelector(
    (state) => state.dailyWeather.days
  );

  return (
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
  );
}
