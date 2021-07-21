import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import TextComponent from "../../../constants/TextComponent";
import { Styles, Colors, FontSize } from "../../../constants/Theme";
import Constants from "expo-constants";
import { t } from "../../../functions/lang";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <View style={[styles.decorationLeft, Styles.shadow]} />

          <View style={[styles.decorationLeftMini, Styles.shadow]} />

          <TouchableOpacity
            style={[styles.leftButton, Styles.shadow, Styles.center]}
            onPress={() => this.props.navigation.pop()}
          >
            <AntDesign name="back" size={FontSize.xxxl} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextComponent
            familt="RobotoMono_bold"
            size={FontSize.xxxl * 2}
            color={Colors.black}
          >
            {t("titles.register")}
          </TextComponent>
          <View style={{ marginVertical: 5 }} />
          <TextComponent size={FontSize.xs} color={Colors.black}>
            {t("descriptions.register")}
          </TextComponent>

          <View style={{ marginVertical: 10 }} />

          <View style={[Styles.center, styles.inputArena]}>
            <TouchableOpacity style={[styles.inputIconButton, Styles.center]}>
              <Feather name="user" size={24} color="black" />
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder={t("form.name")} />
          </View>

          <View style={{ marginVertical: 10 }} />

          <View style={[Styles.center, styles.inputArena]}>
            <TouchableOpacity style={[styles.inputIconButton, Styles.center]}>
              <Feather name="mail" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              keyboardType="email-address"
              style={styles.input}
              placeholder={t("form.email")}
            />
          </View>

          <View style={{ marginVertical: 10 }} />

          <View style={[Styles.center, styles.inputArena]}>
            <TouchableOpacity style={[styles.inputIconButton, Styles.center]}>
              <MaterialCommunityIcons
                name="form-textbox-password"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder={t("form.pass")}
            />
          </View>
        </View>
        <View style={[styles.footer, Styles.center]}>
          <TouchableOpacity
            style={[styles.submitButton, Styles.center, Styles.shadow]}
          >
            <TextComponent color={Colors.white} size={FontSize.xl}>
              {t("buttons.submit")}
            </TextComponent>
          </TouchableOpacity>
          <View style={{ marginVertical: 5 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  decorationLeft: {
    position: "absolute",
    top: -60,
    left: -60,
    width: 170,
    height: 170,
    backgroundColor: Colors.primary1,
    zIndex: 2,
    borderRadius: width / 2,
  },
  leftButton: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 80,
    height: 80,
    backgroundColor: "transparent",
    zIndex: 4,
    borderRadius: 30,
  },
  decorationLeftMini: {
    position: "absolute",
    top: -85,
    left: -88,
    width: 215,
    height: 215,
    backgroundColor: Colors.primary2,
    zIndex: 1,
    borderRadius: width / 2,
    opacity: 0.5,
  },

  header: {
    flex: 0.2,
  },
  content: {
    flex: 0.65,
    paddingHorizontal: Constants.statusBarHeight,
  },
  footer: {
    flex: 0.15,
    paddingHorizontal: Constants.statusBarHeight,
  },

  inputArena: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputIconButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary2,
  },
  input: {
    width: width - 100,
    height: "100%",
    borderBottomColor: Colors.primary2,
    borderBottomWidth: 2,
    paddingLeft: 8,
    fontSize: FontSize.m,
    fontFamily: "RobotoMono_medium",
  },
  submitButton: {
    backgroundColor: Colors.primary2,
    width: width / 2,
    height: 50,
  },
});
