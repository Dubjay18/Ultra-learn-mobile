import { RegularText } from "@/components/StyledText";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function Course() {
	return (
		<View>
			<View className="flex-row">
				<AntDesign name="search1" size={24} color="black" />
				<TextInput placeholder="Search" />
			</View>
			<RegularText>Coure</RegularText>
		</View>
	);
}

