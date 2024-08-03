import { cn } from "@/lib/utils";
import * as Slot from "@rn-primitives/slot";
import { SlottableTextProps, TextRef } from "@rn-primitives/types";
import * as React from "react";
import { Text as RNText } from "react-native";

const TextClassContext = React.createContext<string | undefined>(undefined);

const Text = React.forwardRef<TextRef, SlottableTextProps>(
	({ className, asChild = false, style, ...props }, ref) => {
		const textClass = React.useContext(TextClassContext);
		const Component = asChild ? Slot.Text : RNText;
		return (
			<Component
				className={cn(
					"text-base text-foreground web:select-text",
					textClass,
					className
				)}
				ref={ref}
				style={[style, { fontFamily: "Poppins" }]}
				{...props}
			/>
		);
	}
);
Text.displayName = "Text";

export { Text, TextClassContext };

