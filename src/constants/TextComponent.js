import React from "react";
import { Text } from "react-native";
import { Colors, FontSize } from "./Theme";
import { useFonts } from "expo-font";

export default function TextComponent(props) {
  const [loaded] = useFonts({
    RobotoMono_medium: require("../../assets/Fonts/RobotoMono-Medium.ttf"),
    RobotoMono_medium_italic: require("../../assets/Fonts/RobotoMono-MediumItalic.ttf"),
    RobotoMono_bold: require("../../assets/Fonts/RobotoMono-Bold.ttf"),
    RobotoMono_bold_italic: require("../../assets/Fonts/RobotoMono-BoldItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text
      style={[
        {
          fontSize: props.size ?? FontSize.xs,
          color: props.color ?? Colors.black,
          fontFamily: props.family ?? "RobotoMono_medium",
        },
        props.style ?? null,
      ]}
    >
      {props.children}
    </Text>
  );
}
