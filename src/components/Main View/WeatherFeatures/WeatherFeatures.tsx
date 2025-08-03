import { IWeatherFeature } from "../../../type-interfaces/interfaces";
import { WeatherFeatureItem } from "../WeatherFeatureItem/WeatherFeatureItem";
import styles from "./WeatherFeatures.module.scss";

export function WeatherFeatures() {
  const mockWeatherFeatures: IWeatherFeature[] = [
    {
      feature: "Wind",
      value: 12,
      unit: "kmh",
    },
    {
      feature: "Pressure",
      value: 1000,
      unit: "psi",
    },
    {
      feature: "Humidity",
      value: 28,
      unit: "%",
    },
    {
      feature: "Visibility",
      value: 100,
      unit: "m",
    },
    {
      feature: "UV Index",
      value: 4,
      unit: "(Low)",
    },
  ];

  return (
    <ul className={styles["weather-features-list"]}>
      {mockWeatherFeatures.map((feature, i) => (
        <WeatherFeatureItem featureData={feature} key={i}></WeatherFeatureItem>
      ))}
    </ul>
  );
}
