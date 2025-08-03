import { useAppSelector } from "../../../state/hooks";
import { DailyWeatherItem } from "../DailyWeatherItem/DailyWeatherItem";
import styles from "./DailyWeatherSection.module.scss";

export function DailyWeatherSection() {
  const selectDailyWeatherValues = useAppSelector(
    (state) => state.dailyWeather.days
  );

  return (
    <div className={styles["daily-section"]}>
      <h3>Daily Forecast</h3>

      <ul className={styles["daily-weather-list"]}>
        {selectDailyWeatherValues.map((dailyWeatherItem, i) => {
          return (
            <DailyWeatherItem
              itemData={dailyWeatherItem}
              itemKey={i}
            ></DailyWeatherItem>
          );
        })}
      </ul>
    </div>
  );
}
