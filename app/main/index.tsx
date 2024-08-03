import { RegularText } from "@/components/StyledText";
import { useThemeColor, View } from "@/components/Themed";
import WelcomeSlides from "@/components/WelcomeSlides";
import useDimensions from "@/hooks/useDimensions";
import { FlatList } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function DashboardIndexScreen() {
	const background = useThemeColor({}, "tintBackground");
	const dimensions = useDimensions();
	return (
		<View
			style={{
				backgroundColor: background,
				flex: 1,
			}}
		>
			<View style={{ height: dimensions.height / 7.9 }} />
			<WelcomeSlides />
			<RegularText className="text-xl mt-2 mx-4">Learning Plan</RegularText>
			<View style={{ maxHeight: dimensions.height / 3.5 }} className="mt-4">
				<FlatList
					scrollEnabled
					className="mx-4 shadow-lg"
					style={{
						backgroundColor: background,
						shadowColor: "#B8B8D2",
						shadowOffset: { width: 0, height: 8 },
						shadowOpacity: 0.2,
						shadowRadius: 12,
					}}
					data={[
						{
							title: "Packaging Design",
							progress: 40,
							total: 48,
						},
						{
							title: "Packaging Design",
							progress: 40,
							total: 48,
						},
						{
							title: "Design Thinking",
							progress: 4,
							total: 40,
						},
					]}
					renderItem={(item: {
						item: {
							title: string;
							progress: number;
							total: number;
						};
					}) => <PlanItem {...item.item} />}
				/>
			</View>
		</View>
	);
}

const PlanItem = ({
	title,
	progress,
	total,
}: {
	title: string;
	progress: number;
	total: number;
}) => {
	const background = useThemeColor({}, "tintBackground");
	return (
		<View className="flex-row py-2 items-center justify-between px-4 flex-1 bg-transparent">
			<View className="flex-row items-center gap-4 bg-transparent">
				<AnimatedCircularProgress
					size={33}
					width={4}
					fill={(progress / total) * 100}
					tintColor="#707070"
					onAnimationComplete={() => console.log("onAnimationComplete")}
					backgroundColor="#F4F3FD"
				/>
				<RegularText className="text-base mt-2">{title}</RegularText>
			</View>
			<View
				className="flex-row"
				style={{
					backgroundColor: background,
				}}
			>
				<RegularText className="ml-auto">{progress}</RegularText>
				<RegularText className="ml-auto text-[#B8B8D2]">/{total}</RegularText>
			</View>
		</View>
	);
};

