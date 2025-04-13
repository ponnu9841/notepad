type Note = {
   id: string;
   title: string;
   content: string;
};

type RootStackParamList = {
   Home: undefined;
   Note: { id?: string };
};

type NoteScreenRouteProps = RouteProp<RootStackParamList, "Note">;

type ButtonVariant =
   | "link"
   | "default"
   | "destructive"
   | "outline"
   | "secondary"
   | "ghost"
   | null;

type ButtonSize = "default" | "sm" | "lg" | "icon" | null | undefined;

type DialogProps = {
   buttonText?: string;
   title: string;
   description: string;
   onConfirm: () => void;
   triggerButtonVariant?: ButtonVariant;
   triggerButtonSize?: ButtonSize
};
