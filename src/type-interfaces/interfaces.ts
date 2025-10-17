import { SvgIcon } from "../constants/svg-constants";

export interface IHourlyWeatherItem {
  time: string;
  icon: string;
  temperature: number;
  surface_pressure: number;
}

export interface IDailyWeatherItem {
  date: string;
  weekday: string;
  icon: string;
  lowestTemperature: number;
  highestTemperature: number;
  rainChance: number;
  // temperatureRange: ??
}

export interface IWeatherFeature {
  feature: string;
  value: number;
  unit: string;
  api_name:
    | "wind_speed_10m"
    | "surface_pressure"
    | "cloud_cover"
    | "relative_humidity_2m"
    | "showers";
}

export interface WindDirection {
  direction: string;
  directionCapitalised: string;
}
