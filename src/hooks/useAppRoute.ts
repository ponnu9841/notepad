import { useRoute } from "@react-navigation/native";

const useAppRoute = () => useRoute<NoteScreenRouteProps>();

export default useAppRoute;