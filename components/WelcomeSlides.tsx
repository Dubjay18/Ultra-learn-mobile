import useDimensions from "@/hooks/useDimensions";
import { ScrollView } from "react-native";
import { BoldText } from "./StyledText";
import { View } from "./Themed";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

export default function WelcomeSlides(){
    return (
        <ScrollView  style={{
            flexGrow: 0,
            alignContent: "center",
          }}
          contentContainerStyle={{
            flexGrow: 1,
            position: "relative",
          }}
          horizontal>
            <Slide title="Welcome to the App" action="Get started" btnText="Get started"/>
            <Slide title="Welcome to the App" action="Get started" btnText="Get started"/>
            <Slide title="Welcome to the App" action="Get started" btnText="Get started"/>

        </ScrollView>
    );
}

const Slide = ({
    title,
    action,
    btnText
}:{
    title: string;
    action: string;
    btnText: string;
}) => {
    const dimensions = useDimensions();
    const screenPadding = 20;
  const stepFormWidth = dimensions.width - screenPadding * 2;
    return (
        <>
  
        <View className={`rounded-md bg-[#CEECFE] h-32 py-4 px-3  mx-4`} style={{
                  paddingVertical: 160,
                  width: stepFormWidth,
        }}>
            <BoldText>
                {title}
            </BoldText>
            <Button  size="sm" variant={"accent"} className="mt-auto" style={{
             maxWidth: 120,
            }} >
            <Text>
    {btnText}
            </Text>
            </Button>
        </View>
        </>
    )
}