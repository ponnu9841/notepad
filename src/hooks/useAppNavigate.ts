import { type NavigationProp, useNavigation } from "@react-navigation/native";

const useAppNavigate = () => useNavigation<NavigationProp<RootStackParamList>>();

export default useAppNavigate