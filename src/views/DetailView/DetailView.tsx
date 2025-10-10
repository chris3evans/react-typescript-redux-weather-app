import styles from "./DetailView.module.scss";
import { Navigation } from "../../components/Detail View/Navigation/Navigation";
import { HourlyWeatherSection } from "../../components/Detail View/HourlyWeatherSection/HourlyWeatherSection";
import { fetchHourlyWeather } from "../../api/weather-api-service";
import {
  hourly_weather_params,
  WEATHER_API_URL,
} from "../../constants/weather-api-parameters";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { setHours } from "../../state/slices/hourlyWeatherSlice";
import { WindDetails } from "../../components/Detail View/WindDetails/WindDetails";
import { PressureDetails } from "../../components/Detail View/PressureDetails/PressureDetails";

export function DetailView() {
  const latitude: number = useAppSelector(
    (state) => state.location.coordinates.latitude
  );
  const longitude: number = useAppSelector(
    (state) => state.location.coordinates.longitude
  );

  const dispatch = useAppDispatch();

  const { data: hourlyWeather } = useQuery({
    queryKey: ["hourly-weather"],
    queryFn: async () =>
      fetchHourlyWeather(
        WEATHER_API_URL,
        hourly_weather_params(latitude, longitude)
      ),
  });

  useEffect(() => {
    if (hourlyWeather?.hourly) {
      dispatch(setHours(hourlyWeather.hourly));
    }
  }, [hourlyWeather, dispatch]);

  return (
    <div className={styles["detail-view"]}>
      <Navigation />
      <HourlyWeatherSection />
      <div className={styles["weather-metrics"]}>
        <WindDetails></WindDetails>
        <div></div>
        <div></div>
        <div></div>
        <PressureDetails></PressureDetails>
      </div>
    </div>
  );
}
