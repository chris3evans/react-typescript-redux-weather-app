import { IHourlyWeatherItem } from "../type-interfaces/interfaces";
import styles from "./MainView.module.scss";

export function MainView() {
  const mockHourlyWeatherItems: IHourlyWeatherItem[] = [
    {
      temperature: 20,
      icon: "",
      time: "09:00",
    },
    {
      temperature: 22,
      icon: "",
      time: "10:00",
    },
    {
      temperature: 23,
      icon: "",
      time: "11:00",
    },
    {
      temperature: 25,
      icon: "",
      time: "12:00",
    },
    {
      temperature: 28,
      icon: "",
      time: "13:00",
    },
    {
      temperature: 30,
      icon: "",
      time: "14:00",
    },
    {
      temperature: 29,
      icon: "",
      time: "15:00",
    },
  ];

  return (
    <div className={styles["main-view"]}>
      <div className={styles["overview-section"]}>
        <h2 className={styles["overview-location"]}>Maidenhead</h2>
        <h1 className={styles["overview-temperature"]}>32 C</h1>
        <h3 className={styles["overview-condition"]}>Sunny with clouds</h3>
      </div>

      <div className={styles["hourly-section"]}>
        <ul className={styles["hourly-weather-list"]}>
          {mockHourlyWeatherItems.map((hourlyWeatherItem) => {
            return (
              <li className={styles["hourly-weather-item"]}>
                <h4>{hourlyWeatherItem.time}</h4>
                <div>*ICON*</div>
                <h4>{hourlyWeatherItem.temperature}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
