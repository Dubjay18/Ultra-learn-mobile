import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { BoldText, RegularText } from "@/components/StyledText";
import { useColorScheme } from "@/components/useColorScheme";
import useDimensions from "@/hooks/useDimensions";
import { Image, View } from "react-native";
import TabBar from "@/components/TabBar";
import { SafeAreaView } from "react-native-safe-area-context";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const dimensions = useDimensions();

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Tabs
				screenOptions={{
					headerShadowVisible: false,
				}}
				tabBar={(props) => <TabBar {...props} />}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Home",
						headerStyle: {
							backgroundColor: "transparent",
							height: dimensions.height / 5,
						},
						headerBackgroundContainerStyle: {
							backgroundColor: "transparent",
						},
						tabBarLabel: "Home",
						header: () => {
							return (
								<View className="bg-primary">
									<View
										className="flex-row items-center justify-between"
										style={{
											height: dimensions.height / 5,
										}}
									>
										<View className="mx-3 ">
											<BoldText className="text-xl text-white">
												Hi, Kristern
											</BoldText>
											<RegularText className="text-white">
												Let's start learning
											</RegularText>
										</View>

										<View className="mx-3 ">
											<Image
												source={require("../../assets/images/profile.png")}
											/>
										</View>
									</View>
									<View
										className="rounded-lg bg-white z-[1] py-4 px-3 absolute -bottom-20 left-[10%]"
										style={{
											height: dimensions.height / 7,
											width: dimensions.width / 1.2,
										}}
									>
										<View className="flex-row justify-between items-center mx-3">
											<RegularText>Learned Today</RegularText>
											<RegularText className="text-primary">
												My courses
											</RegularText>
										</View>
										<View className="flex-row items-center">
											<BoldText className="text-2xl">46mins</BoldText>
											<RegularText className="text-gray-500 text-sm">
												{" "}
												/ 60mins
											</RegularText>
										</View>
									</View>
								</View>
							);
						},
						headerBackground: () => {
							return <BoldText className="bg-primary h-full" />;
						},
						headerLeft: () => {
							return (
								<View className="mx-3 ">
									<BoldText className="text-xl text-white">
										Hi, Kristern
									</BoldText>
									<RegularText className="text-white">
										Let's start learning
									</RegularText>
								</View>
							);
						},
						headerRight: () => {
							return (
								<View className="mx-3 ">
									<Image source={require("../../assets/images/profile.png")} />
								</View>
							);
						},
						tabBarIcon: ({ color, size }) => (
							<FontAwesome name="home" color={color} size={size} />
						),
					}}
				/>
				<Tabs.Screen
					name="course"
					options={{
						title: "Course",
						headerStyle: {
							backgroundColor: "transparent",
							height: dimensions.height / 5,
						},
						header: () => {
							return (
								<SafeAreaView className="flex-row bg-white justify-between items-center">
									<View className="mx-3 ">
										<BoldText className="text-xl ">Course</BoldText>
									</View>
									<View className="mx-3 ">
										<Image
											source={require("../../assets/images/profile.png")}
										/>
									</View>
								</SafeAreaView>
							);
						},
					}}
				/>
				<Tabs.Screen
					name="message"
					options={{
						title: "Message",
						headerStyle: {
							backgroundColor: "transparent",
							height: dimensions.height / 5,
						},
						header: () => {
							return (
								<SafeAreaView className="flex-row bg-white justify-between items-center">
									<View className="mx-3 ">
										<BoldText className="text-xl ">Message</BoldText>
									</View>
									<View className="mx-3 ">
										<Image
											source={require("../../assets/images/profile.png")}
										/>
									</View>
								</SafeAreaView>
							);
						},
					}}
				/>
				<Tabs.Screen
					name="account"
					options={{
						title: "Account",
						headerStyle: {
							backgroundColor: "transparent",
							height: dimensions.height / 5,
						},
						header: () => {
							return (
								<SafeAreaView className="flex-row bg-white justify-between items-center pt-10">
									<View className="mx-3 ">
										<BoldText className="text-2xl ">Account</BoldText>
									</View>
								</SafeAreaView>
							);
						},
					}}
				/>
			</Tabs>
		</ThemeProvider>
	);
}

