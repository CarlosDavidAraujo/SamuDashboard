const colorByRisk = {
  1: "#d25151",
  2: "#D2C551",
  3: "#51D275",
  4: "#518CD2",
  90: "#333333",
};

export function getColorByRisk(risk) {
  return colorByRisk[risk];
}
