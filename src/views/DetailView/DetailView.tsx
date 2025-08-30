import styles from "./DetailView.module.scss";
import { Navigation } from "../../components/Detail View/Navigation/Navigation";
import { HourlyWeatherSection } from "../../components/Detail View/HourlyWeatherSection/HourlyWeatherSection";

export function DetailView() {
  return (
    <div className={styles["detail-view"]}>
      <Navigation />
      <HourlyWeatherSection />
      <div className={styles["weather-metrics"]}></div>
    </div>
  );
}
