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
      <h3>Wind</h3>
      <div className={styles["wind-details"]}>
        <span className={styles["wind-speed"]}>
          <span>{selectCurrentData.windSpeed}</span> km/h
        </span>
        <h4>
          From <br /> <span>{selectCurrentData.windDirection.direction}</span>
        </h4>
      </div>
      <div className={styles["wind-direction"]}>
        <span className={styles["wind-axis"]}>
          {selectCurrentData.windDirection.directionCapitalised}
        </span>
        <div style={windDirectionStyles}>
          <Svg svgFill="" svgName="windDirectionArrow" />
        </div>
      </div>
    </div>
  );
};
