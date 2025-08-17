import { ICurrentWeatherState } from "../state/slices/currentWeatherSlice";

export const formatWeatherIcon = function (
  currentWeatherData: ICurrentWeatherState
): string {
  return "sunny";
};
