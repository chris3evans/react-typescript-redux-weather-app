import styles from "./DetailView.module.scss";
import { Navigation } from "../../components/Detail View/Navigation/Navigation";

export function DetailView() {
  return (
    <div className={styles["detail-view"]}>
      <Navigation />
      <div className={styles["hourly-weather-section"]}></div>
      <div className={styles["weather-metrics"]}></div>
    </div>
  );
}
