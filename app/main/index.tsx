import { RegularText } from "@/components/StyledText";
import { useThemeColor, View } from "@/components/Themed";
import WelcomeSlides from "@/components/WelcomeSlides";
import useDimensions from "@/hooks/useDimensions";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";


export default function DashboardIndexScreen() {
  const background = useThemeColor({}, "tintBackground");
  const dimensions = useDimensions();
  return (
    <View style={{
      backgroundColor: background,
      flex: 1,
    }}>
        <View style={{height: dimensions.height / 7.9}}/>
     <WelcomeSlides/>
      <RegularText className="text-xl mt-2 mx-4">Learning Plan</RegularText>
<View style={{maxHeight: dimensions.height / 3.5}}>
        <FlatList scrollEnabled className="mx-4 shadow-lg" style={{
          backgroundColor: background,
          shadowColor: '#B8B8D2',
          shadowOffset: {width: 0, height: 8},
          shadowOpacity: 0.2,
          shadowRadius: 12,
        }} data={["1","2","3"]} renderItem={() => <View className="flex-row py-2 items-center justify-between px-4 flex-1 bg-transparent">
          <View className="flex-row items-center gap-4 bg-transparent">
         <AnimatedCircularProgress
            size={33}
            width={4}
              fill={20}
              tintColor="#707070"
            onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#F4F3FD" />
<RegularText className="text-base mt-2">Packaging Design</RegularText>
</View>
<RegularText className="ml-auto">40/48</RegularText>
        </View>} />
</View>
    </View>
  );
}
