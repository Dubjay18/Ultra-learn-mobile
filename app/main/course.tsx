import CategoryCard, { CategoryCardVariant } from "@/components/CategoryCard";
import { RegularText } from "@/components/StyledText";
import { useThemeColor } from "@/components/Themed";
import { Input } from "@/components/ui/input";
import { AntDesign, Feather } from "@expo/vector-icons";
import { ScrollView, TextInput, View } from "react-native";

export default function Course() {
	const background = useThemeColor({}, "tintBackground");
	return (
		<View
			style={{
				backgroundColor: background,
				flex: 1,
				padding: 20,
			}}
		>
			<View className="flex-row bg-[#F4F3FD] px-4 py-3 rounded-md justify-between">
				<View className="flex-row gap-2 items-center">
					<AntDesign name="search1" size={24} color="#B8B8D2" className="h-8" />
					<Input
						placeholder="Find Course"
						style={{
							fontSize: 16,
						}}
						className="h-8"
						placeholderTextColor={"#B8B8D2"}
					/>
				</View>
				<View className="rotate-90">
					<Feather name="sliders" size={24} color="#B8B8D2" />
				</View>
			</View>
			<ScrollView horizontal={true} className="flex-[0.29] my-7">
				<CategoryCard />
				<CategoryCard variant={CategoryCardVariant.SECONDARY} />
			</ScrollView>
			<RegularText>Coure</RegularText>
		</View>
	);
}

