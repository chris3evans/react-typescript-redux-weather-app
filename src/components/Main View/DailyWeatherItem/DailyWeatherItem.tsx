import { IDailyWeatherItem } from "../../../type-interfaces/interfaces";
import { Svg } from "../../Svg/Svg";
import styles from "./DailyWeatherItem.module.scss";
import { Link } from "react-router-dom";

export function DailyWeatherItem({
  itemData,
}: {
  itemData: IDailyWeatherItem;
  key: number;
}) {
  return (
    <Link to="/detail">
      <li className={styles["daily-weather-item"]}>
        <div className={styles["daily-weather-top"]}>
          <Svg svgFill="#ffffff" svgName={itemData.icon}></Svg>
          <h4>
            {itemData.weekday[0].toLocaleUpperCase() +
              itemData.weekday.slice(1)}
          </h4>
        </div>
        <div className={styles["daily-weather-bottom"]}>
          <div className={styles["daily-weather-temperatures"]}>
            <p>{itemData.lowestTemperature}°C&nbsp;</p>
            <p>/</p>
            <p>&nbsp;{itemData.highestTemperature}°C</p>
          </div>
          <div className={styles["daily-weather-rain-chance"]}>
            <Svg svgFill="#ffffff" svgName="rain"></Svg>
            <p>{itemData.rainChance}%</p>
          </div>
        </div>
      </li>
    </Link>
  );
}
