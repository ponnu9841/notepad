import { cn } from "@/lib/utils";
import { View } from "react-native";
import { ReactNode } from "react";

export default function Layout({
   children,
   className,
}: {
   children: ReactNode;
   className?: string;
}) {
   return (
      <View className={cn("flex-1 bg-background", className)}>{children}</View>
   );
}
