import { Text, TouchableOpacity, View } from "react-native";
import { RegularText } from "./StyledText";

import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useThemeColor } from "./Themed";
import { icons } from "@/assets/icons";
import { AntDesign } from "@expo/vector-icons";

export interface Icons {
	[key: string]: (props: any) => JSX.Element;
}

export default function TabBar({
	state,
	descriptors,
	navigation,
}: BottomTabBarProps) {
	const background = useThemeColor({}, "tintBackground");
	const primaryColor = useThemeColor({}, "primary");

	return (
		<View
			style={{
				flexDirection: "row",
				backgroundColor: background,
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
				elevation: 5,
			}}
			className="px-2 py-5"
		>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;
				if (["_sitmap", "+not-found"].includes(route.name)) return null;
				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<>
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={{ flex: 1 }}
							className="items-center justify-center"
						>
							{icons[route.name as unknown as keyof Icons]({
								color: isFocused ? primaryColor : "#F4F3FD",
							})}
							<RegularText
								className="text-sm"
								style={{ color: isFocused ? primaryColor : "#B8B8D2" }}
							>
								{label as unknown as string}
							</RegularText>
						</TouchableOpacity>
						{index === 1 && (
							<TouchableOpacity
								accessibilityRole="button"
								onPress={() => {
									// Handle search button press
								}}
								style={{ flex: 1 }}
								className="items-center justify-center "
							>
								<View className="p-4 -mt-9 rounded-full items-center justify-center bg-primary/5">
									<AntDesign name="search1" size={29} color={primaryColor} />
								</View>
								<Text style={{ color: "#B8B8D2" }}>Search</Text>
							</TouchableOpacity>
						)}
					</>
				);
			})}
		</View>
	);
}

