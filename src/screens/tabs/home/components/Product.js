import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import TextComponent from "../../../../constants/TextComponent";
import { Styles, Colors, FontSize } from "../../../../constants/Theme";
const { width } = Dimensions.get("window");
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={[styles.container, Styles.center]}>
        <Image
          source={{ uri: this.props.data.images[0] }}
          style={{
            width: "75%",
            height: "75%",
            position: "absolute",
            top: "2%",
          }}
        />
        <TouchableOpacity
          style={[
            Styles.center,
            {
              width: 40,
              height: 40,
              borderRadius: 25,
              backgroundColor: Colors.primary2,
              position: "absolute",
              top: 0,
              right: 0,
            },
          ]}
        >
          <FontAwesome name="shopping-cart" size={20} color="black" />
        </TouchableOpacity>
        <View
          style={Styles.center}
          style={{
            position: "absolute",
            bottom: "5%",
            left: "4%",
            right: "4%",
          }}
        >
          <TextComponent
            size={FontSize.xxxl / 2}
            family="RobotoMono_bold"
            style={{
              flex: 1,
              flexShrink: 1,
              flexWrap: "wrap",
            }}
          >
            {this.props.data.name}
          </TextComponent>
          <TextComponent
            size={FontSize.m}
            family="RobotoMono_bold"
            style={{
              flex: 1,
              flexShrink: 1,
              flexWrap: "wrap",
            }}
          >
            {this.props.data.price} AZN
          </TextComponent>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 177,
    backgroundColor: Colors.white,
    marginRight: 10,
    marginBottom: 10,
    height: 250,
    borderRadius: 20,
  },
});
