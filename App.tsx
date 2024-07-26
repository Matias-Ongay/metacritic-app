import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./components/Main";


const App: React.FC = () => {
 
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main></Main>
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:12,
  },
});
