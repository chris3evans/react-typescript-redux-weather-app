import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as MapPinIcon } from "../assets/svg-icons/map-pin.svg";
import { ReactComponent as SunIcon } from "../assets/svg-icons/sun.svg";
import { ReactComponent as ClearNightIcon } from "../assets/svg-icons/clear-night.svg";
import { ReactComponent as CloudyIcon } from "../assets/svg-icons/cloudy.svg";
import { ReactComponent as SunnyLittleCloudIcon } from "../assets/svg-icons/sunny-little-cloud.svg";
import { ReactComponent as CloudyLittleSunIcon } from "../assets/svg-icons/cloudy-little-sun.svg";
import { ReactComponent as NightLittleCloudIcon } from "../assets/svg-icons/night-little-cloud.svg";
import { ReactComponent as NightLotsCloudIcon } from "../assets/svg-icons/night-lots-cloud.svg";
import { ReactComponent as FogIcon } from "../assets/svg-icons/fog.svg";
import { ReactComponent as DrizzleIcon } from "../assets/svg-icons/drizzle.svg";
import { ReactComponent as RainIcon } from "../assets/svg-icons/rain.svg";
import { ReactComponent as HeavyRainIcon } from "../assets/svg-icons/heavy-rain.svg";
import { ReactComponent as ThunderstormIcon } from "../assets/svg-icons/thunderstorm.svg";
import { ReactComponent as ThunderstormRainIcon } from "../assets/svg-icons/thunderstorm-rain.svg";
import { ReactComponent as SnowIcon } from "../assets/svg-icons/snow.svg";
import { ReactComponent as HailIcon } from "../assets/svg-icons/hail.svg";

export interface SvgIcon {
  Component: FunctionComponent<SVGProps<SVGSVGElement>>;
  width: string;
  height: string;
  description: string;
}

export const SVG_ICONS: { [id: string]: SvgIcon } = {
  mapPin: {
    Component: MapPinIcon,
    width: "10px",
    height: "10px",
    description: "",
  },
  sunny: {
    Component: SunIcon,
    width: "10px",
    height: "10px",
    description: "Sunny",
  },
  cloudy: {
    Component: CloudyIcon,
    width: "10px",
    height: "10px",
    description: "Cloudy",
  },
  sunnyLittleCloud: {
    Component: SunnyLittleCloudIcon,
    width: "10px",
    height: "10px",
    description: "Sunny with a little cloud",
  },
  cloudyLittleSun: {
    Component: CloudyLittleSunIcon,
    width: "10px",
    height: "10px",
    description: "Cloudy with a little sun",
  },
  clearNight: {
    Component: ClearNightIcon,
    width: "10px",
    height: "10px",
    description: "Clear night",
  },
  nightLittleCloud: {
    Component: NightLittleCloudIcon,
    width: "10px",
    height: "10px",
    description: "Night with a little cloud",
  },
  nightLotsCloud: {
    Component: NightLotsCloudIcon,
    width: "10px",
    height: "10px",
    description: "Cloudy night",
  },
  fog: {
    Component: FogIcon,
    width: "10px",
    height: "10px",
    description: "Foggy",
  },
  drizzle: {
    Component: DrizzleIcon,
    width: "10px",
    height: "10px",
    description: "Drizzle",
  },
  rain: {
    Component: RainIcon,
    width: "10px",
    height: "10px",
    description: "Raining",
  },
  heavyRain: {
    Component: HeavyRainIcon,
    width: "10px",
    height: "10px",
    description: "Heavy Rain",
  },
  thunderStorm: {
    Component: ThunderstormIcon,
    width: "10px",
    height: "10px",
    description: "Thunderstorms",
  },
  thunderStormRain: {
    Component: ThunderstormRainIcon,
    width: "10px",
    height: "10px",
    description: "Thunderstorms and rain",
  },
  snow: {
    Component: SnowIcon,
    width: "10px",
    height: "10px",
    description: "Snow",
  },
  hail: {
    Component: HailIcon,
    width: "10px",
    height: "10px",
    description: "Hail",
  },
};
