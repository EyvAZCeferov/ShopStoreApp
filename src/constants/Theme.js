import React from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

export const Colors = {
  primary1: "#753D72",
  primary2: "#FFB426",
  white: "#ffffff",
  black: "#000000",
  success: "#22bb33",
  error: "#bb2124",
  gray:"#f2f2f2"
};

export const FontSize = {
  xs: 14,
  s: 16,
  m: 18,
  l: 20,
  xl: 22,
  xxl: 24,
  xxxl: 26,
};

export const Styles = {
  center: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
};

export const TabIcon = {
  home: <AntDesign name="home" size={24} color={Colors.white} />,
  homeFOCUSED: (
    <MaterialIcons
      name="home"
      size={30}
      color={Colors.black}
      style={[
        Styles.shadow,
        {
          backgroundColor: Colors.primary2,
          paddingHorizontal: 14,
          paddingVertical: 12,
          borderRadius: 200,
          textAlign: "center",
        },
      ]}
    />
  ),
  bucket: <Feather name="shopping-cart" size={24} color={Colors.white} />,
  bucketFOCUSED: (
    <AntDesign
      name="shoppingcart"
      size={30}
      color={Colors.black}
      style={[
        Styles.shadow,
        {
          backgroundColor: Colors.primary2,
          paddingHorizontal: 14,
          paddingVertical: 12,
          borderRadius: 200,
          textAlign: "center",
        },
      ]}
    />
  ),
  messages: (
    <Ionicons name="chatbox-ellipses-outline" size={24} color={Colors.white} />
  ),
  messagesFOCUSED: (
    <Ionicons
      name="chatbox-ellipses"
      size={30}
      color={Colors.black}
      style={[
        Styles.shadow,
        {
          backgroundColor: Colors.primary2,
          paddingHorizontal: 14,
          paddingVertical: 12,
          borderRadius: 200,
          textAlign: "center",
        },
      ]}
    />
  ),
};
