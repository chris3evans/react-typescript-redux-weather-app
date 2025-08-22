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
  console.log(currentWeatherData);
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
