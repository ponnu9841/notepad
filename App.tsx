import "./global.css";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useColorScheme } from "@/lib/useColorScheme";
import * as SplashScreen from "expo-splash-screen";
import {
   Theme,
   DarkTheme,
   DefaultTheme,
   ThemeProvider,
   NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PortalHost } from "@rn-primitives/portal";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import HomeScreen from "@/screens/HomeScreen";
import NoteScreen from "@/screens/NoteScreen";
import NoteAddButton from "@/components/NoteAddButton";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { NAV_THEME } from "@/lib/constants";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const LIGHT_THEME: Theme = {
   ...DefaultTheme,
   colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
   ...DarkTheme,
   colors: NAV_THEME.dark,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
   const [loaded] = useFonts({
      SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
   });
   const hasMounted = useRef(false);
   const { colorScheme, isDarkColorScheme } = useColorScheme();
   const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

   useIsomorphicLayoutEffect(() => {
      if (hasMounted.current) {
         return;
      }

      if (Platform.OS === "web") {
         // Adds the background color to the html element to prevent white background on overscroll.
         document.documentElement.classList.add("bg-background");
      }
      setIsColorSchemeLoaded(true);
      hasMounted.current = true;
   }, []);

   useEffect(() => {
      if (loaded) {
         SplashScreen.hideAsync();
      }
   }, [loaded]);

   if (!loaded) {
      return null;
   }

   if (!isColorSchemeLoaded) {
      return null;
   }
   return (
      <Provider store={store}>
         <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
            <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
            <NavigationContainer>
               <Stack.Navigator>
                  <Stack.Screen
                     name="Home"
                     options={{
                        headerTitle: "All Notes",
                        headerRight: () => <NoteAddButton />,
                     }}
                     component={HomeScreen}
                  />
                  <Stack.Screen name="Note" component={NoteScreen} />
               </Stack.Navigator>
            </NavigationContainer>
            <PortalHost />
         </ThemeProvider>
      </Provider>
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

const useIsomorphicLayoutEffect =
   Platform.OS === "web" && typeof window === "undefined"
      ? useEffect
      : useLayoutEffect;
