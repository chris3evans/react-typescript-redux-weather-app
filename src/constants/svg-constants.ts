import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as MapPinIcon } from "../assets/svg-icons/map-pin.svg";

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
};
