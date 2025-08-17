import { useAppSelector } from "../../../state/hooks";
import { Svg } from "../../Svg/Svg";
import styles from "./OverViewSection.module.scss";

export function OverViewSection() {
  const selectCurrentWeatherValues = useAppSelector(
    (state) => state.currentWeather
  );

  const selectFormattedAddress: string = useAppSelector(
    (state) => state.location.streetAddress.formatted
  );
  const selectLastLocationUpdateTime: string = useAppSelector(
    (state) => state.location.lastUpdateTime
  );

  return (
    <>
      <div className={styles["overview-section"]}>
        <div className={styles["overview-location"]}>
          <div className={styles["location-icon"]}>
            <Svg svgFill="#ffffff" svgName="mapPin"></Svg>
          </div>
          <div className={styles["location-details"]}>
            <h3>{selectFormattedAddress}</h3>
            <h4>Last updated on {selectLastLocationUpdateTime}</h4>
          </div>
        </div>

        <div className={styles["overview-weather"]}>
          <div className={styles["weather-icon"]}>
            <Svg svgFill="#000000" svgName="sunny"></Svg>
          </div>
          <h1>
            {Number(selectCurrentWeatherValues.temperature2m.toFixed(2))}°C
          </h1>
          <div className={styles["weather-details"]}>
            <h3>Sunny with clouds</h3>
            <h4>
              Feels like{" "}
              {Number(
                selectCurrentWeatherValues.apparentTemperature.toFixed(2)
              )}
              °C
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
