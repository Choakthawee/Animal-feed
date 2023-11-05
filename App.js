import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import { BottomTabs } from './src/navigator/tabbar/papernavber';
export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <NavigationContainer>
        <PaperProvider>
          <BottomTabs />
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