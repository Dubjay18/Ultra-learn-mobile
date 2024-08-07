import React from "react";
import { Text, View } from "react-native";
import { RegularText } from "./StyledText";
import CategoryVariant1Svg from "@/assets/svgs/CategoryVariant1Svg";

function CategoryCard() {
	return (
		<View className="bg-[#CEECFE] h-28 w-56 rounded-lg relative">
			<View className="absoute -top-2 left-0">
				<CategoryVariant1Svg width={250} height={450} />
			</View>
			<View className="mt-auto mb-5 py-2 w-[60%] ml-auto bg-white pl-2 rounded-l-full">
				<RegularText className="w-fit text-[#3D5CFF] font-bold text-lg">
					Language
				</RegularText>
			</View>
		</View>
	);
}

export default CategoryCard;

