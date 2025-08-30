import { Svg } from "../../Svg/Svg";
import styles from "./HourlyWeatherItem.module.scss";

export function HourlyWeatherItem() {
  return (
    <li className={styles["hourly-weather-item"]}>
      <p>10:00 AM</p>
      <Svg svgFill="#ffffff" svgName="sunny"></Svg>
      <p>25°C</p>
    </li>
  );
}
