import styles from "./MainView.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../../state/hooks";
import { setValues } from "../../state/slices/currentWeatherSlice";
import { useEffect } from "react";
import { setDays } from "../../state/slices/dailyWeatherSlice";
import { OverViewSection } from "../../components/Main View/OverviewSection/OverViewSection";
import { DailyWeatherSection } from "../../components/Main View/DailyWeatherSection/DailyWeatherSection";
import {
  fetchCurrentWeather,
  fetchDailyWeather,
} from "../../api/weather-api-service";
import {
  CURRENT_WEATHER_PARAMS,
  DAILY_WEATHER_PARAMS,
  WEATHER_API_URL,
} from "../../api/weather-api-parameters";
import { WeatherFeatures } from "../../components/Main View/WeatherFeatures/WeatherFeatures";

export function MainView() {
  const {
    data: currentWeather,
    // isPending,
    // isError,
  } = useQuery({
    queryKey: ["current-weather"],
    queryFn: async () =>
      fetchCurrentWeather(WEATHER_API_URL, CURRENT_WEATHER_PARAMS),
  });

  const {
    data: dailyWeather,
    // isPending
    // isError
  } = useQuery({
    queryKey: ["daily-weather"],
    queryFn: async () =>
      fetchDailyWeather(WEATHER_API_URL, DAILY_WEATHER_PARAMS),
  });

  useEffect(() => {
    if (currentWeather?.current) {
      dispatch(setValues(currentWeather.current));
    }
    if (dailyWeather?.daily) {
      dispatch(setDays(dailyWeather.daily));
    }
  }, [currentWeather, dailyWeather]);

  const dispatch = useAppDispatch();

  return (
    <div className={styles["main-view"]}>
      <OverViewSection></OverViewSection>
      <WeatherFeatures></WeatherFeatures>
      <DailyWeatherSection></DailyWeatherSection>
    </div>
  );
}
