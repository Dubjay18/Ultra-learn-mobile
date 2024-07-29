import { useState } from "react";
import { Dimensions } from "react-native";

var dimensionWidth = Dimensions.get("window").width;
var dimensionHeight = Dimensions.get("window").height;
export default function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: dimensionWidth,
    height: dimensionHeight,
  });

  return dimensions;
}
