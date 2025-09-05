import styles from "./MainView.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../../state/hooks";
import { setValues } from "../../state/slices/currentWeatherSlice";
import { useEffect, useState } from "react";
import { setDays } from "../../state/slices/dailyWeatherSlice";
import { OverViewSection } from "../../components/Main View/OverviewSection/OverViewSection";
import { DailyWeatherSection } from "../../components/Main View/DailyWeatherSection/DailyWeatherSection";
import {
  fetchCurrentWeather,
  fetchDailyWeather,
  fetchReverseGeoLocation,
} from "../../api/weather-api-service";
import {
  current_weather_params,
  daily_weather_params,
  WEATHER_API_URL,
} from "../../constants/weather-api-parameters";
import { WeatherFeatures } from "../../components/Main View/WeatherFeatures/WeatherFeatures";
import {
  locationUpdated,
  reverseGeoCode,
} from "../../state/slices/locationSlice";

export function MainView() {
  const [coords, setCoords] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });

  const dispatch = useAppDispatch();

  const {
    data: currentWeather,
    // isPending,
    // isError,
  } = useQuery({
    queryKey: ["current-weather"],
    queryFn: async () =>
      fetchCurrentWeather(
        WEATHER_API_URL,
        current_weather_params(coords.latitude, coords.longitude)
      ),
  });

  const {
    data: dailyWeather,
    // isPending
    // isError
  } = useQuery({
    queryKey: ["daily-weather"],
    queryFn: async () =>
      fetchDailyWeather(
        WEATHER_API_URL,
        daily_weather_params(coords.latitude, coords.longitude)
      ),
  });

  const { data: location } = useQuery({
    queryKey: ["location", coords.latitude, coords.longitude],
    queryFn: async () => {
      return await fetchReverseGeoLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    },
  });

  useEffect(() => {
    if (navigator.geolocation) {
      const geoOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation Error:", error.message);
        },
        geoOptions
      );
    } else {
      console.error("Location sharing is not enabled");
    }
  }, []);

  useEffect(() => {
    if (location) {
      dispatch(reverseGeoCode(location));
      formatLocationUpdatedTime();
    }
  }, [location, dispatch]);

  useEffect(() => {
    if (currentWeather?.current) {
      dispatch(setValues(currentWeather));
    }
    if (dailyWeather?.daily) {
      dispatch(setDays(dailyWeather));
    }
  }, [currentWeather, dailyWeather, dispatch]);

  const formatLocationUpdatedTime = function (): void {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const formatter = new Intl.DateTimeFormat("en-GB", options);
    const formattedDate = formatter.format(now);
    dispatch(locationUpdated(formattedDate));
  };

  return (
    <div className={styles["main-view"]}>
      <OverViewSection></OverViewSection>
      <WeatherFeatures></WeatherFeatures>
      <DailyWeatherSection></DailyWeatherSection>
    </div>
  );
}
