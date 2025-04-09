import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useColorScheme } from "@/hooks/useColorScheme";
import * as SplashScreen from "expo-splash-screen";
import {
   DarkTheme,
   DefaultTheme,
   ThemeProvider,
   NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemedView } from "@/components/ThemedView";
import { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import HomeScreen from "@/screens/HomeScreen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
   const colorScheme = useColorScheme();
   const [loaded] = useFonts({
      SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
   });

   useEffect(() => {
      if (loaded) {
         SplashScreen.hideAsync();
      }
   }, [loaded]);

   if (!loaded) {
      return null;
   }
   return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
         </NavigationContainer>
         
      </ThemeProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});
