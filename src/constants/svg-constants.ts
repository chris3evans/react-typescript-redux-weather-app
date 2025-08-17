import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as MapPinIcon } from "../assets/svg-icons/map-pin.svg";
import { ReactComponent as SunIcon } from "../assets/svg-icons/sun.svg";

export interface SvgIcon {
  Component: FunctionComponent<SVGProps<SVGSVGElement>>;
  width: string;
  height: string;
}

export const SVG_ICONS: { [id: string]: SvgIcon } = {
  mapPin: {
    Component: MapPinIcon,
    width: "10px",
    height: "10px",
  },
  sun: {
    Component: SunIcon,
    width: "10px",
    height: "10px",
  },
};
