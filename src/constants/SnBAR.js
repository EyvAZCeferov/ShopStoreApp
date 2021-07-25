import React from "react";
import { View, Dimensions } from "react-native";
import TextComponent from "./TextComponent";
import { Colors, FontSize, Styles } from "./Theme";
const { width } = Dimensions.get("window");

export default function SnBar(props) {
  return (
    <View
      style={[
        Styles.center,
        {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor:
            props.snackBarStyle == "success" ? Colors.success : Colors.error,
          height: 50,
          width: width,
          opacity: props.visible ? 1 : 0,
          zIndex: 99999999999,
        },
      ]}
    >
      <TextComponent color={Colors.white} size={FontSize.s}>
        {props.snackBarMessage}
      </TextComponent>
    </View>
  );
}
