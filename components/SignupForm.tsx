import React from "react";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { useThemeColor } from "@/components/Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "@/components/ui/CustomButton";
import Checkbox from "expo-checkbox";
import { BoldText, RegularText } from "@/components/StyledText";
import { Link } from "expo-router";

const SignupForm = () => {
  const backgroundColor = useThemeColor({}, "tintBackground");
  const [checked, setChecked] = React.useState(false);
  return (
    <KeyboardAvoidingView
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
      <View className={"mt-10"}>
        <CustomButton
          className={"rounded-lg"}
          title={"Create account"}
          onPress={() => console.log("jdshnfj")}
        />
      </View>
      <View className={"h-10"} />
      <View className={"flex-row justify-center mt-20 items-center gap-4"}>
        <Checkbox
          value={checked}
          onValueChange={() => {
            setChecked(!checked);
          }}
          className={" rounded checked:bg-primary"}
        />
        <RegularText className={"text-[#858597] text-lg"}>
          By creating an account you have to agree with our them & condication.
        </RegularText>
      </View>
      <View className="flex-row mx-auto mt-5">
        <RegularText className={"text-[#858597] text-lg"}>
          Don't have an account?{" "}
        </RegularText>
        <Link href="/login">
          <BoldText className={"text-primary text-lg underline"}>
            Log in
          </BoldText>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupForm;
