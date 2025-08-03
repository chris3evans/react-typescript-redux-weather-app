import { IWeatherFeature } from "../../../type-interfaces/interfaces";
import styles from "./WeatherFeatureItem.module.scss";

export function WeatherFeatureItem({
  featureData,
}: {
  featureData: IWeatherFeature;
  key: number;
}) {
  return (
    <div className={styles["weather-feature-item"]}>
      <h4>{featureData.feature}</h4>
      <div className={styles["feature-value"]}>
        <h4>{featureData.value}</h4>&nbsp;
        <h4>{featureData.unit}</h4>
      </div>
    </div>
  );
}
