import { Dimensions } from "react-native";

function distributeElements(numberOfFields) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  let center = { x: width / 2, y: height / 2 };
  let radius = Math.min(width, height);
  let aroundPoints = [];
  let angle = 0;
  let step = (2 * Math.PI) / numberOfFields;
  for (let i = 0; i < numberOfFields; i++) {
    aroundPoints.push({
      x: Math.round(width / 2 + radius * Math.cos(angle) - width / 2),
      y: Math.round(height / 2 + radius * Math.sin(angle) - height / 2),
    });
    angle += step;
  }

  return { center: center, aroundPoints: aroundPoints };
}

export { distributeElements };
