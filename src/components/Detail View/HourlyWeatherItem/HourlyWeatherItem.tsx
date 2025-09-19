import { IHourlyWeatherItem } from "../../../type-interfaces/interfaces";
import { Svg } from "../../Svg/Svg";
import styles from "./HourlyWeatherItem.module.scss";

export function HourlyWeatherItem({
  itemData,
}: {
  itemData: IHourlyWeatherItem;
}) {
  return (
    <li className={styles["hourly-weather-item"]}>
      <p>{itemData.time}</p>
      <Svg svgFill="#ffffff" svgName={itemData.icon}></Svg>
      <p>{itemData.temperature}°C</p>
    </li>
  );
}
