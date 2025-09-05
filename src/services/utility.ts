import { ICurrentWeatherState } from "../state/slices/currentWeatherSlice";

export const formatCurrentWeatherIcon = function (
  currentWeatherData: ICurrentWeatherState
): string {
  let isDrizzle: boolean = false;
  let isRain: boolean = false;
  let isHeavyRain: boolean = false;
  let isLittleCloud: boolean = false;
  let isVeryCloud: boolean = false;
  let isCloudy: boolean = false;
  let isDay: boolean = true;
  // if raining
  if (currentWeatherData.rain > 0 && currentWeatherData.rain < 25) {
    isDrizzle = true;
  }
  if (currentWeatherData.rain > 25 && currentWeatherData.rain < 50) {
    isRain = true;
  }
  if (currentWeatherData.rain > 50) {
    isHeavyRain = true;
  }
  // if cloudy
  if (currentWeatherData.cloudCover > 0 && currentWeatherData.cloudCover < 50) {
    isLittleCloud = true;
  }
  if (
    currentWeatherData.cloudCover > 50 &&
    currentWeatherData.cloudCover < 80
  ) {
    isVeryCloud = true;
  }
  if (currentWeatherData.cloudCover > 80) {
    isCloudy = true;
  }
  // if night or day
  if (currentWeatherData.isDay === 0) {
    isDay = false;
  }
  // by default return sunny

  // sun little cloud
  if (isLittleCloud && isDay) return "sunnyLittleCloud";
  // sun very cloud
  if (isVeryCloud && isDay) return "cloudyLittleSun";
  // cloud
  if (isCloudy && isDay) return "cloudy";
  // drizzle
  if (isDrizzle && isDay) return "drizzle";
  // rain
  if (isRain && isDay) return "rain";
  // heavy rain
  if (isHeavyRain && isDay) return "heavyRain";
  // clear night
  if (
    !isLittleCloud &&
    !isVeryCloud &&
    !isCloudy &&
    !isDrizzle &&
    !isRain &&
    !isHeavyRain &&
    !isDay
  ) {
    return "clearNight";
  }
  // night lots cloud
  if (isVeryCloud && !isDay) return "nightLittleCloud";
  // night little cloud
  if (isLittleCloud && !isDay) return "nightLotsCloud";

  return "sunny";
};

export const formatWeatherIcon = function (weatherCode: number): string {
  if (weatherCode === 1) {
    return "sunny";
  }

  if (weatherCode === 3) {
    return "sunnyLittleCloud";
  }

  if (
    weatherCode === 42 ||
    weatherCode === 43 ||
    weatherCode === 44 ||
    weatherCode === 45 ||
    weatherCode === 48 ||
    weatherCode === 49
  ) {
    return "cloudyLittleSun";
  }

  // cloudy

  if (
    weatherCode === 20 ||
    weatherCode === 50 ||
    weatherCode === 51 ||
    weatherCode === 52 ||
    weatherCode === 53 ||
    weatherCode === 54 ||
    weatherCode === 55 ||
    weatherCode === 56 ||
    weatherCode === 57 ||
    weatherCode === 80
  ) {
    return "drizzle";
  }

  if (
    weatherCode === 21 ||
    weatherCode === 25 ||
    weatherCode === 60 ||
    weatherCode === 61 ||
    weatherCode === 62 ||
    weatherCode === 63 ||
    weatherCode === 81
  ) {
    return "rain";
  }

  if (weatherCode === 64 || weatherCode === 65 || weatherCode === 82) {
    return "heavyRain";
  }

  if (
    weatherCode === 27 ||
    weatherCode === 87 ||
    weatherCode === 88 ||
    weatherCode === 89 ||
    weatherCode === 90
  ) {
    return "hail";
  }

  if (
    weatherCode === 11 ||
    weatherCode === 12 ||
    weatherCode === 28 ||
    weatherCode === 40 ||
    weatherCode === 41
  ) {
    return "fog";
  }

  if (
    weatherCode === 22 ||
    weatherCode === 26 ||
    weatherCode === 70 ||
    weatherCode === 71 ||
    weatherCode === 72 ||
    weatherCode === 73 ||
    weatherCode === 74 ||
    weatherCode === 75 ||
    weatherCode === 85 ||
    weatherCode === 86
  ) {
    return "snow";
  }

  if (weatherCode === 17 || weatherCode === 29) {
    return "thunderStorm";
  }

  if (weatherCode === 95 || weatherCode === 97) {
    return "thunderStormRain";
  }

  return "sunny";
};
