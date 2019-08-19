import React from "react";
import { Button } from "react-native";

export class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}
