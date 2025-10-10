import { useAppSelector } from "../../../state/hooks";
import { Svg } from "../../Svg/Svg";
import styles from "./WindDetails.module.scss";

export const WindDetails = function () {
  const selectCurrentData = useAppSelector((state) => state.currentWeather);

  const windDirectionStyles = {
    transform: `rotate(${selectCurrentData.windDirectionDegrees}deg)`,
  };

  return (
    <div className={styles["wind"] + " span-1"}>
      <h4>Wind</h4>
      <div className={styles["wind-details"]}>
        <span>12.0 km/h</span>
        <h5>Light</h5>
        <h5>
          From <br /> Northwest
        </h5>
      </div>
      <div className={styles["wind-direction"]}>
        <span className={styles["wind-axis"]}>N</span>
        <div style={windDirectionStyles}>
          <Svg svgFill="" svgName="windDirectionArrow" />
        </div>
      </div>
    </div>
  );
};
