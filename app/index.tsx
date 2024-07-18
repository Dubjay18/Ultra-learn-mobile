import { Dimensions, Image, TouchableOpacity, View } from "react-native";

import { Text, useThemeColor } from "@/components/Themed";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Onboarding from "react-native-onboarding-swiper";
import CustomButton from "@/components/ui/CustomButton";
import { router } from "expo-router";
import { BoldText, RegularText } from "@/components/StyledText";

var { width, height } = Dimensions.get("window");
export default function ModalScreen() {
  const background = useThemeColor({}, "background");
  const primaryColor = useThemeColor({}, "primary");
  const onboardingRef = useRef<Onboarding>(null);

  const Done = ({ isLight, ...props }: any) => (
    <View
      className={"flex-row  justify-between  mx-2 "}
      style={{
        width: width - 10,
      }}
    >
      <CustomButton
        {...props}
        className="mx-1"
        title={"Sign up"}
        onPress={() =>
          router.push({
            pathname: "/signup",
          })
        }
      />
      <CustomButton
        {...props}
        className="mx-1"
        title={"Login"}
        variant={"secondary"}
        onPress={() =>
          router.push({
            pathname: "/login",
          })
        }
      />
    </View>
  );

  const Dot = ({
    isLight,
    selected,
  }: {
    isLight: boolean;
    selected: boolean;
  }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? primaryColor : "rgba(0, 0, 0, 0.2)";
    } else {
      backgroundColor = selected ? primaryColor : "rgba(255, 255, 255, 0.5)";
    }
    return (
      <View
        className={"rounded-full "}
        style={{
          width: selected ? 30 : 8,
          height: 7,
          borderRadius: 10,
          marginHorizontal: 3,
          backgroundColor,
          marginTop: -height / 4,
        }}
      />
    );
  };

  const Skip = ({ isLight, ...props }: { isLight: boolean; props: any }) => {
    return (
      <TouchableOpacity
        {...props}
        onPress={() => {
          onboardingRef?.current?.flatList?.scrollToEnd();
        }}
        className={`absolute `}
        style={{
          top: -height + 100,
          left: width - 50,
        }}
      >
        <Text className={"text-lg text-gray-500"}>Skip</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View className={"relative flex-1"}>
      <SafeAreaView
        className={"flex-row justify-between w-full"}
        style={{
          backgroundColor: background,
        }}
      >
        <View className={"flex-row  justify-between w-full"}>
          <View></View>
          {/*{*/}
          {/*    onboardingRef?.current?.flatList?.*/}
          {/*}*/}
        </View>
      </SafeAreaView>
      <Onboarding
        ref={onboardingRef}
        DotComponent={Dot}
        DoneButtonComponent={Done}
        bottomBarHighlight={false}
        bottomBarHeight={100}
        SkipButtonComponent={Skip as any}
        showNext={false}
        pages={[
          {
            backgroundColor: background,
            image: <Image source={require("../assets/images/onboard-1.png")} />,
            title: (
              <BoldText
                className={"font-bold text-xl "}
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                }}
              >
                Numerous free trial courses
              </BoldText>
            ),
            subtitle: (
              <RegularText className="max-w-md px-10 text-center">
                Free courses for you to find your way to learning
              </RegularText>
            ),
          },
          {
            backgroundColor: background,
            image: <Image source={require("../assets/images/onboard-2.png")} />,
            title: (
              <BoldText
                className={"font-bold text-xl "}
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                }}
              >
                Quick and easy learning
              </BoldText>
            ),
            subtitle: (
              <RegularText className="max-w-md px-10 text-center">
                Easy and fast learning at any time to help you improve various
                skills
              </RegularText>
            ),
          },
          {
            backgroundColor: background,
            image: <Image source={require("../assets/images/onboard-3.png")} />,
            title: (
              <BoldText
                className={"font-bold text-xl "}
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                }}
              >
                Create your own study plan
              </BoldText>
            ),
            subtitle: (
              <RegularText className="max-w-md px-10 text-center">
                Study according to the study plan, make study more motivated
              </RegularText>
            ),
          },
        ]}
      />
    </View>
  );
}
