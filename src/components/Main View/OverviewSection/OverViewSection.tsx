import { useAppSelector } from "../../../state/hooks";
import styles from "./OverViewSection.module.scss";

export function OverViewSection() {
  const selectCurrentWeatherValues = useAppSelector(
    (state) => state.currentWeather
  );

  return (
    <>
      <div className={styles["overview-section"]}>
        <div className={styles["overview-location"]}>
          <div className={styles["location-icon"]}>*ICON*</div>
          <div className={styles["location-details"]}>
            <h3>Maidenhead, United Kingdom</h3>
            <h4>Last updated: *time here*</h4>
          </div>
        </div>

        <div className={styles["overview-weather"]}>
          <div className={styles["weather-icon"]}>*ICON*</div>
          <h1>
            {Number(selectCurrentWeatherValues.temperature2m.toFixed(2))}°C
          </h1>
          <div className={styles["weather-details"]}>
            <h3>Sunny with clouds</h3>
            <h4>Feels like 20 °C</h4>
          </div>
        </div>
      </div>
    </>
  );
}
