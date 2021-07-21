import React from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Colors, FontSize, Styles } from "../../../../constants/Theme";
import { AntDesign } from "@expo/vector-icons";
import TextComponent from "../../../../constants/TextComponent";

export default class Header extends React.Component {
  render() {
    return (
      <View style={[Styles.center, styles.container]}>
        <StatusBar
          backgroundColor={Colors.primary1}
          barStyle={"light-content"}
        />
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <AntDesign name="menufold" size={24} color="white" />
        </TouchableOpacity>
        <TextComponent size={FontSize.xxxl} color={Colors.white}>
          {this.props.name}
        </TextComponent>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.primary1,
  },
});
