import { Text, TextProps } from "./Themed";

type cutomTextProps = {
  className?: string;
};

export function MonoText(props: TextProps & cutomTextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}

export function BoldText(props: TextProps & cutomTextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Poppins-Bold" }]} />
  );
}

export function RegularText(props: TextProps & cutomTextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Poppins-Regular" }]} />
  );
}
