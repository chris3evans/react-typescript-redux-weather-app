import { SVG_ICONS, SvgIcon } from "../../constants/svg-constants";

export function Svg({
  svgFill,
  svgName,
}: {
  svgFill: string;
  svgName: string;
}) {
  const svgData: SvgIcon = SVG_ICONS[svgName];
  const { Component, width, height } = svgData;

  return <Component fill={svgFill} width={width} height={height}></Component>;
}
