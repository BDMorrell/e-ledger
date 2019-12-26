const shadowColor = "rgba(0, 0, 0, 0.10)";
const subtleShadow = `0px 0px 5px 0px ${shadowColor}`;

export const theme = {
  main: "#057f32",
  onMain: "#ffffff",
  borderWidth: "0.1em",
  shadowColor,
  lightColor: "#e6e6e6", // the solid version of shadowColor on white
  subtleShadow,
  friendlyPadding: "1em",
  headerHeight: "2em",
};

function wrapSvgLine(path) {
  return `<svg width="1em" height="1em" preserveAspectRatio="xMinYMid" viewBox="0,0,64,64" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill-opacity="0" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="${path}"/></svg>`;
}

export const icons = {
  arrowRight: wrapSvgLine("M32,16L48,32L32,48"),
  arrowLeft: wrapSvgLine("M32,16L16,32L32,48"),
  arrowDown: wrapSvgLine("M16,32L32,48L48,32"),
  arrowUp: wrapSvgLine("M16,32L32,16L48,32"),
  plus: wrapSvgLine("M16,32 L48,32 M32,48 L32,16"),
  minus: wrapSvgLine("M16,32 L48,32"),
};
