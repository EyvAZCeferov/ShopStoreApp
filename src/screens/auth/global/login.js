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
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

export default class Login extends React.Component {
  login() {
    AsyncStorage.setItem("@token", "Token");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <View style={[styles.decorationLeft, Styles.shadow]} />
          <View style={[styles.decorationLeftMini, Styles.shadow]} />
        </View>
        <View style={styles.content}>
          <TextComponent
            familt="RobotoMono_bold"
            size={FontSize.xxxl * 2}
            color={Colors.black}
          >
            {t("titles.login")}
          </TextComponent>
          <View style={{ marginVertical: 5 }} />
          <TextComponent size={FontSize.xs} color={Colors.black}>
            {t("descriptions.login")}
          </TextComponent>

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

          <TouchableOpacity
            style={{
              marginTop: Constants.statusBarHeight,
              width: width - 50,
              height: 30,
            }}
            onPress={() => this.props.navigation.navigate("Forgetpass")}
          >
            <TextComponent
              familt="RobotoMono_bold"
              size={FontSize.s}
              style={{
                textAlign: "right",
              }}
            >
              {t("titles.forgetpass")}
            </TextComponent>
          </TouchableOpacity>
        </View>
        <View style={[styles.footer, Styles.center]}>
          <TouchableOpacity
            style={[styles.submitButton, Styles.center, Styles.shadow]}
            onPress={() => this.login()}
          >
            <TextComponent color={Colors.white} size={FontSize.xl}>
              {t("buttons.submit")}
            </TextComponent>
          </TouchableOpacity>
          <View style={{ marginVertical: 5 }} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
            style={[
              styles.submitButton,
              Styles.center,
              Styles.shadow,
              {
                backgroundColor: Colors.primary1,
              },
            ]}
          >
            <TextComponent color={Colors.white} size={FontSize.m}>
              {t("titles.register")}
            </TextComponent>
          </TouchableOpacity>
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
    flex: 0.6,
    paddingHorizontal: Constants.statusBarHeight,
  },
  footer: {
    flex: 0.2,
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
