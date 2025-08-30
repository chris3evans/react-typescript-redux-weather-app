import styles from "./DetailView.module.scss";
import { Navigation } from "../../components/Detail View/Navigation/Navigation";
import { Svg } from "../../components/Svg/Svg";

export function DetailView() {
  return (
    <div className={styles["detail-view"]}>
      <Navigation />
      <ul className={styles["hourly-weather-list"]}>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
        <li className={styles["hourly-weather-item"]}>
          <p>10:00 AM</p>
          <Svg svgFill="#ffffff" svgName="sunny"></Svg>
          <p>25°C</p>
        </li>
      </ul>
      <div className={styles["weather-metrics"]}></div>
    </div>
  );
}
