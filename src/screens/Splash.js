import React from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import TextComponent from "../constants/TextComponent";
import { Styles, Colors, FontSize } from "../constants/Theme";
import Constants from "expo-constants";

export default class Splash extends React.Component {
  render() {
    return (
      <View style={[styles.container, Styles.center]}>
        <StatusBar backgroundColor={Colors.white} barStyle={"dark-content"} />
        <Image
          source={require("../../assets/adaptive-icon.png")}
          width={350}
          height={100}
          style={{
            width: 350,
            height: 100,
          }}
          resizeMethod="auto"
        />
        <TextComponent
          color={Colors.primary1}
          size={FontSize.m * 2}
          style={{
            marginTop: Constants.statusBarHeight,
          }}
          family="RobotoMono_bold"
        >
          Shop Store
        </TextComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
