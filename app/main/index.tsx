import { RegularText } from "@/components/StyledText";
import {  View } from "@/components/Themed";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import { Text } from "@/components/ui/text";
import useDimensions from "@/hooks/useDimensions";

export default function DashboardIndexScreen() {
  const dimensions = useDimensions();
  return (
    <View>
      <View style={{height: dimensions.height / 7.9}}/>
      <View className="rounded">
      
      <View className="mx-3 ">
    
       <Button  size="sm" variant={"accent"} style={{
        maxWidth: 120,
       }} >
       <Text>
        Get started
       </Text>
       </Button>
        
        </View>
      </View>
      <RegularText>Dashboa</RegularText>
    </View>
  );
}
