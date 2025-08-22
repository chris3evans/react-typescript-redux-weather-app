import { useEffect, useState } from "react";
import { useAppSelector } from "../../../state/hooks";
import { IWeatherFeature } from "../../../type-interfaces/interfaces";
import { WeatherFeatureItem } from "../WeatherFeatureItem/WeatherFeatureItem";
import styles from "./WeatherFeatures.module.scss";
import { currentWeatherSlice } from "../../../state/slices/currentWeatherSlice";

export function WeatherFeatures() {
  const [windFeature, setWindFeature] = useState<IWeatherFeature>({
    feature: "Wind",
    value: 0,
    unit: "kmh",
    api_name: "wind_speed_10m",
  });
  const [pressureFeature, setPressureFeature] = useState<IWeatherFeature>({
    feature: "Pressure",
    value: 0,
    unit: "psi",
    api_name: "surface_pressure",
  });
  const [humidityFeature, setHumidityFeature] = useState<IWeatherFeature>({
    feature: "Humidity",
    value: 0,
    unit: "%",
    api_name: "relative_humidity_2m",
  });
  const [cloudCoverFeature, setCloudCoverFeature] = useState<IWeatherFeature>({
    feature: "Cloud Cover",
    value: 0,
    unit: "m",
    api_name: "cloud_cover",
  });
  const [showersFeature, setShowersFeature] = useState<IWeatherFeature>({
    feature: "Showers",
    value: 0,
    unit: "%",
    api_name: "showers",
  });

  const weatherFeatures: IWeatherFeature[] = [
    windFeature,
    pressureFeature,
    humidityFeature,
    cloudCoverFeature,
    showersFeature,
  ];

  const selectCurrentWeatherValues = useAppSelector(
    (state) => state.currentWeather
  );

  useEffect(() => {
    Object.entries(selectCurrentWeatherValues).forEach(([key, value]) => {
      switch (key) {
        case "windSpeed":
          setWindFeature({
            ...windFeature,
            value: Number(value.toFixed(2)),
          });
          break;
        case "surfacePressure":
          setPressureFeature({
            ...pressureFeature,
            value: Number(value.toFixed(2)),
          });
          break;
        case "relativeHumidity2m":
          setHumidityFeature({
            ...humidityFeature,
            value: value,
          });
          break;
        case "cloudCover":
          setCloudCoverFeature({
            ...cloudCoverFeature,
            value: Number(value.toFixed(2)),
          });
          break;
        case "showers":
          setShowersFeature({
            ...showersFeature,
            value: value,
          });
          break;
      }
    });
  }, [selectCurrentWeatherValues]);

  return (
    <ul className={styles["weather-features-list"]}>
      {weatherFeatures.map((feature, i) => (
        <WeatherFeatureItem featureData={feature} key={i}></WeatherFeatureItem>
      ))}
    </ul>
  );
}
