import { IHourlyWeatherItem } from "../../../type-interfaces/interfaces";
import styles from "./HourlyWeatherItem.module.scss";

export function HourlyWeatherItem({
  itemData,
  itemKey,
}: {
  itemData: IHourlyWeatherItem;
  itemKey: number;
}) {
  return (
    <li key={itemKey} className={styles["hourly-weather-item"]}>
      <h4>{itemData.time}</h4>
      <div>{itemData.icon}</div>
      <h4>{itemData.temperature}°C</h4>
    </li>
  );
}
