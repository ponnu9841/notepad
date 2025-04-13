import { Button as ButtonComponent } from "@/components/ui/button";
import { Text } from "./ui/text";

export default function Button({
   title,
   onPress,
   variant = "default",
   size = "default",
   disabled = false,
   children,
   ...props
}: {
   title?: string;
   onPress?: () => void;
   variant?: ButtonVariant;
   size?: ButtonSize;
   disabled?: boolean;
   children?: React.ReactNode;
}) {
   return (
      <ButtonComponent
         onPress={() => {
            if (onPress) onPress();
         }}
         variant={variant}
         size={size}
         disabled={disabled}
         {...props}
      >
         {!!title && typeof title === "string" && <Text>{title}</Text>}
         {children && children}
      </ButtonComponent>
   );
}
