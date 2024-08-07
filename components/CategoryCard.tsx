import React from "react";
import { Text, View } from "react-native";
import { RegularText } from "./StyledText";
import CategoryVariant1Svg from "@/assets/svgs/CategoryVariant1Svg";
import CategoryVariant2Svg from "@/assets/svgs/CategoryVariant2Svg";

export enum CategoryCardVariant {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface CategoryCardProps {
	variant: CategoryCardVariant;
}

function CategoryCard({
	variant = CategoryCardVariant.PRIMARY,
}: {
	variant?: CategoryCardVariant;
}) {
	return (
		<View className="bg-[#CEECFE] h-28 w-56 rounded-xl relative">
			<View className="absoute -top-2 left-0">
				{variant === CategoryCardVariant.PRIMARY && (
					<CategoryVariant1Svg width={550} height={450} />
				)}
				{variant === CategoryCardVariant.SECONDARY && (
					<CategoryVariant2Svg width={550} height={450} />
				)}
			</View>
			<View className="mt-auto mb-5 py-2 w-[60%] ml-auto bg-white pl-2 rounded-l-full">
				<RegularText
					className={`w-fit  font-bold text-lg ${
						CategoryCardVariant.PRIMARY && "text-[#3D5CFF]"
					} ${CategoryCardVariant.SECONDARY && "text-[#EFE0FF]"}`}
				>
					Language
				</RegularText>
			</View>
		</View>
	);
}

export default CategoryCard;

