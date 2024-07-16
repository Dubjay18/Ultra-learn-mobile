import { SafeAreaView } from "react-native-safe-area-context";
import { Text, useThemeColor } from "@/components/Themed";
import { Dimensions, View } from "react-native";
import SignupForm from "@/components/SignupForm";
import { BoldText } from "@/components/StyledText";

var { width, height } = Dimensions.get("window");
export default function SignupScreen() {
  const backgroundColor = useThemeColor({}, "background");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor,
        paddingHorizontal: 5,
      }}
    >
      <View className={"px-5"}>
        <BoldText
          className={"font-bold"}
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginTop: height / 12,
          }}
        >
          Sign Up
        </BoldText>
        <Text className={"text-gray-500"}>
          Enter your details below & free sign up
        </Text>
      </View>
      <SignupForm />
    </SafeAreaView>
  );
}
