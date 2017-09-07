//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { inject, observer } from "mobx-react/native";
import { Button } from "../components";

// create a component
@inject("nav")
@observer
class FirstScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  handleRoute = () => {
    this.props.nav.handleChangeRoute("gameScreen");
  };

  render() {
    const buttonStyle = {
      backgroundColor: "#F2199F"
    };
    return (
      <View style={styles.container}>
        <Button text="Play" customStyle={buttonStyle} onPress={this.handleRoute} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});

//make this component available to the app
export default FirstScreen;
