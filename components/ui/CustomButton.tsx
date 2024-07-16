import { Text, TouchableOpacity } from "react-native";
import { BoldText } from "../StyledText";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "lg" | "md" | "sm";

interface CustomButtonProps {
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
    size == "lg" ? "text-xl px-8 py-8" : size == "md" ? " px-16 py-4" : "";
  return (
    <TouchableOpacity
      className={` ${className}  ${variant == "primary" && "bg-primary text-white"} ${variant == "secondary" && "bg-transparent border border-primary "}
  ${buttonSizeClass} rounded-xl font-bold text-center
    ${disabled && "opacity-50 cursor-not-allowed"}`}
      disabled={disabled}
      onPress={onPress}
    >
      <BoldText
        className={`${variant == "primary" && "text-white"} ${variant == "secondary" && "text-primary"} text-center text-lg`}
      >
        {title}
      </BoldText>
    </TouchableOpacity>
  );
};

export default CustomButton;
