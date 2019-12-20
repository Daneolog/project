import React from "react";
import {
  Text,
  Header,
  Input,
  ThemeProvider,
  Button,
  Icon
} from "react-native-elements";
import { View, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const theme = {
  Input: {
    inputContainerStyle: {
      borderRadius: 40,
      borderWidth: 1,
      borderColor: "rgba(110, 120, 170, 1)",
      height: 50,
      marginVertical: 5
    },
    placeholderTextColor: "rgba(110, 120, 170, 1)",
    inputStyle: {
      marginLeft: 10,
      color: "white"
    },
    keyboardAppearance: "light",
    blurOnSubmit: false
  }
};

export class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ThemeProvider theme={theme}>
        <View style={{ alignContent: "center", padding: 20 }}>
          <Text style={{ fontSize: 40, textAlign: "center" }}>Login</Text>

          <Input
            leftIcon={
              <Icon
                name="user"
                type="simple-line-icon"
                color="rgba(110, 120, 170, 1)"
                size={25}
              />
            }
            placeholder="Username"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.passwordInput.focus();
            }}
          />

          <Input
            leftIcon={
              <Icon
                name="lock"
                type="simple-line-icon"
                color="rgba(110, 120, 170, 1)"
                size={25}
              />
            }
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            ref={input => (this.passwordInput = input)}
            blurOnSubmit
          />

          <Button
            title="Add to Cart"
            linearGradientProps={{
              colors: ["#FF9800", "#F44336"],
              start: [1, 0],
              end: [0.2, 0]
            }}
            ViewComponent={LinearGradient}
            buttonStyle={{
              borderWidth: 0,
              borderColor: "transparent",
              borderRadius: 20
            }}
          />
        </View>
      </ThemeProvider>
    );
  }
}
