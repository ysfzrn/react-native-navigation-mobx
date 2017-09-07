//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
class Button extends Component {
  render() {
    const { text, customStyle } = this.props;

    return (
      <TouchableOpacity style={[styles.container, customStyle]} {...this.props}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 235,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold"
  }
});

//make this component available to the app
export default Button;
