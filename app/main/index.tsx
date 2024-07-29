import { RegularText } from "@/components/StyledText";
import { Text, View } from "@/components/Themed";
import useDimensions from "@/hooks/useDimensions";

export default function DashboardIndexScreen() {
  const dimensions = useDimensions();
  return (
    <View>
      
      <RegularText>Dashboard Index Screen</RegularText>
    </View>
  );
}
