import { useAppSelector } from "../../../state/hooks";
import styles from "./PressureDetails.module.scss";

export const PressureDetails = function () {
  const selectCurrentData = useAppSelector((state) => state.currentWeather);

  return (
    <div className={styles["pressure"]}>
      <h3>Pressure</h3>
      <div className={styles["pressure-details"]}>
        <span className={styles["pressure-value"]}>
          <span>{selectCurrentData.surfacePressure}</span> h/Pa
        </span>
      </div>
      <div className={styles["wind-direction"]}>
        Pressure Measurer
        {/* <span className={styles["wind-axis"]}>
          {selectCurrentData.windDirection.directionCapitalised}
        </span>
        <div>
          <Svg svgFill="" svgName="windDirectionArrow" />
        </div> */}
      </div>
    </div>
  );
};
