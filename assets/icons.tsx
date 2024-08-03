import { Icons } from "@/components/TabBar";
import {
	AntDesign,
	Entypo,
	Feather,
	FontAwesome,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
export const icons = {
	index: (props: any) => (
		<MaterialCommunityIcons name="home" size={26} {...props} />
	),
	course: (props: any) => <Entypo name="book" size={26} {...props} />,
	account: (props: any) => <FontAwesome name="user" size={26} {...props} />,
	message: (props: any) => (
		<MaterialCommunityIcons name="message-processing" size={26} {...props} />
	),
} as Icons;

