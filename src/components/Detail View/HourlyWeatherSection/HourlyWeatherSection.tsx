import { useAppSelector } from "../../../state/hooks";
import { IHourlyWeatherItem } from "../../../type-interfaces/interfaces";
import { HourlyWeatherItem } from "../HourlyWeatherItem/HourlyWeatherItem";
import styles from "./HourlyWeatherSection.module.scss";

export function HourlyWeatherSection() {
  const hourlyWeather: IHourlyWeatherItem[] = useAppSelector(
    (state) => state.hourlyWeather.hours
  );

  return (
    <ul className={styles["hourly-weather-list"]}>
      {hourlyWeather.map((hw) => (
        <HourlyWeatherItem itemData={hw} />
      ))}
    </ul>
  );
}
