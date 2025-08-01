import { useAppSelector } from "../../../state/hooks";
import styles from "./OverViewSection.module.scss";

export function OverViewSection() {
  const selectCurrentWeatherValues = useAppSelector(
    (state) => state.currentWeather
  );

  return (
    <>
      <div className={styles["overview-section"]}>
        <h2 className={styles["overview-location"]}>Maidenhead</h2>
        <h1 className={styles["overview-temperature"]}>
          {Number(selectCurrentWeatherValues.temperature2m.toFixed(2))}°C
        </h1>

        <h3 className={styles["overview-condition"]}>Sunny with clouds</h3>
      </div>
    </>
  );
}
