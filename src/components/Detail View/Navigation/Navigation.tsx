import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { Svg } from "../../Svg/Svg";
import { formatDateLong } from "../../../services/utility";

export function Navigation() {
  return (
    <div className={styles["navigation"]}>
      <Link to="/">
        <Svg svgFill="#ffffff" svgName="leftArrow"></Svg>
      </Link>
      <div className={styles["day-navigation"]}>
        <h2>{formatDateLong(new Date())}</h2>
        <button className={styles["day-navigation-button"]}>
          <Svg svgFill="#ffffff" svgName="leftArrow"></Svg>
          <p>Previous Day</p>
        </button>
        <button className={styles["day-navigation-button"]}>
          <p>Next Day</p> <Svg svgFill="#ffffff" svgName="rightArrow"></Svg>
        </button>
      </div>
    </div>
  );
}
