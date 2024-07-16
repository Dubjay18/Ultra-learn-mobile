import React from "react";
import { Text, TextInput, View } from "react-native";
import { useThemeColor } from "@/components/Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "@/components/ui/CustomButton";
import Checkbox from "expo-checkbox";
import { RegularText } from "@/components/StyledText";

const LoginForm = () => {
  const backgroundColor = useThemeColor({}, "tintBackground");
  const [checked, setChecked] = React.useState(false);
  return (
    <View
      className={"rounded-t-xl p-5 mt-2"}
      style={{
        backgroundColor,
        flex: 1,
      }}
    >
      <View className={"mt-5"}>
        <RegularText className={"text-[#858597] text-lg"}>
          Your Email
        </RegularText>
        <TextInput
          className={
            "bg-transparent p-4 border-[0.5px] border-[#858597] rounded-lg text-xl"
          }
        />
      </View>
      <View className={"mt-5"}>
        <Text className={"text-[#858597] text-lg"}>Password</Text>
        <View
          className={
            "bg-transparent p-4 border-[0.5px] border-[#858597] rounded-lg text-xl flex-row"
          }
        >
          <TextInput
            secureTextEntry={true}
            className={"bg-transparent flex-1 rounded-lg text-xl"}
          />
          <MaterialCommunityIcons name={"eye"} size={25} />
        </View>
      </View>
      <View className="mt-5 flex-row justify-end">
        <RegularText className={"text-[#858597] text-lg"}>
          Forgot Password?
        </RegularText>
      </View>
      <View className={"mt-5"}>
        <CustomButton
          className={"rounded-lg"}
          title={"Log in"}
          onPress={() => console.log("jdshnfj")}
        />
      </View>
      <View className={"h-10"} />
    </View>
  );
};

export default LoginForm;
