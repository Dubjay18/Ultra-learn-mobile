import { Dimensions, Image, TouchableOpacity, View } from "react-native";

import { Text, useThemeColor } from "@/components/Themed";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Onboarding from "react-native-onboarding-swiper";
import CustomButton from "@/components/ui/CustomButton";

var { width, height } = Dimensions.get("window");
export default function ModalScreen() {
  const background = useThemeColor({}, "background");
  const primaryColor = useThemeColor({}, "primary");
  const onboardingRef = useRef<Onboarding>(null);

  const Done = ({ isLight, ...props }: any) => (
    <View
      className={"flex-row  justify-between  mx-2 "}
      style={{
        width: width - 20,
      }}
    >
      <CustomButton
        {...props}
        title={"Sign up"}
        onPress={() => console.log("jdshnfj")}
      />

      <CustomButton
        {...props}
        title={"Login"}
        variant={"secondary"}
        onPress={() => console.log("jdshnfj")}
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
              <Text
                className={"font-bold text-xl underline"}
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                }}
              >
                Numerous free trial courses
              </Text>
            ),
            subtitle:
              "Free courses for you to \n" + "find your way to learning",
          },
          {
            backgroundColor: background,
            image: <Image source={require("../assets/images/onboard-2.png")} />,
            title: (
              <Text
                className={"font-bold text-xl underline"}
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                }}
              >
                Quick and easy learning
              </Text>
            ),
            subtitle:
              "Easy and fast learning at any time to help you improve various skills",
          },
          {
            backgroundColor: background,
            image: <Image source={require("../assets/images/onboard-3.png")} />,
            title: (
              <Text
                className={"font-bold text-xl underline"}
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                }}
              >
                Create your own study plan
              </Text>
            ),
            subtitle:
              "Study according to the study plan, make study \n" +
              "more motivated",
          },
        ]}
      />
    </View>
  );
}
