import { fetchWeatherApi } from "openmeteo";

const params = {
  latitude: 51.5085,
  longitude: -0.1257,
  hourly: "temperature_2m",
  models: "ukmo_seamless",
};
const url = "https://api.open-meteo.com/v1/forecast";
// const responses = await fetchWeatherApi(url, params);
