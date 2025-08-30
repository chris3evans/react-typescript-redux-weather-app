import { Link } from "react-router-dom";
import { Svg } from "../../components/Svg/Svg";
import styles from "./DetailView.module.scss";

export function DetailView() {
  return (
    <div className={styles["detail-view"]}>
      <div className={styles["navigation"]}>
        <Link to="/">
          <Svg svgFill="#ffffff" svgName="leftArrow"></Svg>
        </Link>
        <div className={styles["day-navigation"]}>
          <h2>Saturday, 30th August 2025</h2>
          <button className={styles["day-navigation-button"]}>
            <Svg svgFill="#ffffff" svgName="leftArrow"></Svg>
            <p>Previous Day</p>
          </button>
          <button className={styles["day-navigation-button"]}>
            <p>Next Day</p> <Svg svgFill="#ffffff" svgName="rightArrow"></Svg>
          </button>
        </div>
      </div>
      <div className={styles["hourly-weather-section"]}></div>
      <div className={styles["weather-metrics"]}></div>
    </div>
  );
}
