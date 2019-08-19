import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen } from "./src/LoginScreen";
import { MainScreen } from "./src/customer/MainScreen";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//     </View>
//   );
// }

const mainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  CustomerMain: { screen: MainScreen }
});

const App = createAppContainer(mainNavigator);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
