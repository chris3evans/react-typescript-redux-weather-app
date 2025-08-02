import { useAppSelector } from "../../../state/hooks";
import { HourlyWeatherItem } from "../HourlyWeatherItem/HourlyWeatherItem";
import styles from "./HourlyWeatherSection.module.scss";

export function HourlyWeatherSection() {
  const selectHourlyWeatherValues = useAppSelector(
    (state) => state.hourlyWeather.hours
  );

  return (
    <div className={styles["hourly-section"]}>
      <ul className={styles["hourly-weather-list"]}>
        {selectHourlyWeatherValues.map((hourlyWeatherItem, i) => {
          if (i <= 7) {
            return (
              <HourlyWeatherItem
                itemData={hourlyWeatherItem}
                itemKey={i}
              ></HourlyWeatherItem>
            );
          } else {
            return;
          }
        })}
      </ul>
    </div>
  );
}
