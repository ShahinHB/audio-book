import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import UserProfile from "./src/screens/UserProfile";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Home /> */}
        <UserProfile />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 47,
    paddingLeft: 21,
    backgroundColor: "#0a071e",
    height: "100%",
    paddingRight: 21,
  },
});
