//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
class GameScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>GameScreen</Text>
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
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default GameScreen;