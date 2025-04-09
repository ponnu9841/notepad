type Note = {
   id: string;
   content: string;
};

type RootStackParamList = {
   Home: undefined;
   Note: { id?: string };
};

type NoteScreenRouteProps = RouteProp<RootStackParamList, "Note">