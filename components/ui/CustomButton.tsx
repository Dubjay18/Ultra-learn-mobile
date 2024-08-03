import { Text, TouchableOpacity, ViewProps } from "react-native";
import { BoldText, RegularText } from "../StyledText";

type ButtonVariant = "primary" | "secondary" | "accent";
type ButtonSize = "lg" | "md" | "sm";

interface CustomButtonProps extends ViewProps {
  title: string;
  onPress: () => void;
  disabled?: boolean; // Optional prop for disabled state
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled,
  variant = "primary",
  size = "md",
  className,
}) => {
  const buttonSizeClass =
    size == "lg" ? "text-xl px-6 py-8" : size == "md" ? " px-16 py-4" : "py-2";
    const fontSize = size == "lg" ? "text-xl" : size == "md" ? "text-lg" : "text-sm";
  return (
    <TouchableOpacity
      className={` ${className}  ${variant == "primary" && "bg-primary text-white"} ${variant == "accent" && "bg-[#FF6905]"} ${variant == "secondary" && "bg-transparent border border-primary "}
  ${buttonSizeClass} rounded-xl font-bold text-center
    ${disabled && "opacity-50 cursor-not-allowed"}`}
      disabled={disabled}
      onPress={onPress}
    >
      <RegularText
        className={`${variant == "primary" && "text-white"} ${variant == "secondary" && "text-primary"} ${variant == "accent" && "text-white"} ${fontSize} text-center text-lg`}
      >
        {title}
      </RegularText>
    </TouchableOpacity>
  );
};

export default CustomButton;
