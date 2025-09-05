import { SVG_ICONS, SvgIcon } from "../../constants/svg-constants";

export function Svg({
  svgFill,
  svgName,
}: {
  svgFill: string;
  svgName: string;
}) {
  const svgData: SvgIcon | undefined = SVG_ICONS[svgName];

  if (!svgData) {
    console.error(`Problem with svg icon ${svgName}`);
    return <div>Problem with {svgName}</div>;
  }
  const { Component, width, height } = svgData;

  return <Component fill={svgFill} width={width} height={height}></Component>;
}
