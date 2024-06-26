import { Text, TouchableOpacity } from "react-native";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "lg" | "md" | "sm";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean; // Optional prop for disabled state
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled,
  variant = "primary",
  size = "md",
}) => {
  const buttonSizeClass =
    size == "lg" ? "text-xl px-8 py-8" : size == "md" ? " px-16 py-4" : "";
  return (
    <TouchableOpacity
      className={`  ${variant == "primary" && "bg-primary text-white"} ${variant == "secondary" && "bg-transparent border border-primary "}
  ${buttonSizeClass} rounded-xl font-bold
    ${disabled && "opacity-50 cursor-not-allowed"}`}
      disabled={disabled}
      onPress={onPress}
    >
      <Text
        className={`${variant == "primary" && "text-white"} ${variant == "secondary" && "text-primary"} text-lg`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
