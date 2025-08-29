import { IDailyWeatherItem } from "../../../type-interfaces/interfaces";
import { Svg } from "../../Svg/Svg";
import styles from "./DailyWeatherItem.module.scss";

export function DailyWeatherItem({
  itemData,
}: {
  itemData: IDailyWeatherItem;
  key: number;
}) {
  return (
    <li className={styles["daily-weather-item"]}>
      <div className={styles["daily-weather-top"]}>
        <div className={styles["daily-weather-icon"]}>
          <Svg svgFill="#ffffff" svgName={itemData.icon}></Svg>
        </div>
        <h4>
          {itemData.weekday[0].toLocaleUpperCase() + itemData.weekday.slice(1)}
        </h4>
      </div>
      <div className={styles["daily-weather-bottom"]}>
        <div className={styles["daily-weather-temperatures"]}>
          <p>{itemData.lowestTemperature} °C&nbsp;</p>
          <p>/</p>
          <p>&nbsp;{itemData.highestTemperature} °C</p>
        </div>
        <div className={styles["rain-icon"]}>*ICON*</div>
      </div>
    </li>
  );
}
