import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./src/navigator/tabbar/navbar";
import { Provider as PaperProvider } from 'react-native-paper';
import { BottomTabs } from './src/navigator/tabbar/papernavber';
export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <NavigationContainer>
        <PaperProvider>
          <BottomTabs>
          </BottomTabs>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
