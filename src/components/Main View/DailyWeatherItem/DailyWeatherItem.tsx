import { IDailyWeatherItem } from "../../../type-interfaces/interfaces";
import styles from "./DailyWeatherItem.module.scss";

export function DailyWeatherItem({
  itemData,
  itemKey,
}: {
  itemData: IDailyWeatherItem;
  itemKey: number;
}) {
  return (
    <li key={itemKey} className={styles["daily-weather-item"]}>
      <div className={styles["daily-weather-date"]}>
        <h3>
          {itemData.weekday[0].toLocaleUpperCase() + itemData.weekday.slice(1)}
        </h3>
        <p>{itemData.date}</p>
      </div>
      <div>{itemData.icon}</div>
      <h3>{itemData.lowestTemperature}°C</h3>
      <div>*Temperature Range*</div>
      <h3>{itemData.highestTemperature}°C</h3>
    </li>
  );
}
