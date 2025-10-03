import { Svg } from "../../Svg/Svg";
import styles from "./WindDetails.module.scss";

export const WindDetails = function () {
  return (
    <div className="span-1">
      <div className={styles["wind-details"]}>
        <h4>Wind</h4>
        <span>12.0 km/h</span>
        <h5>Light</h5>
        <h5>
          From <br /> Northwest
        </h5>
      </div>
      <div className={styles["wind-direction"]}>
        <span>N</span>
        <Svg svgFill={""} svgName={"windDirectionArrow"} />
      </div>
    </div>
  );
};
