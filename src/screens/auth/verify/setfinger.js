import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Styles, Colors, FontSize } from "../../../constants/Theme";
import TextComponent from "../../../constants/TextComponent";
import Constants from "expo-constants";
import { t } from "../../../functions/lang";
const { width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";

export default class SetFinger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setFinger: false,
      prevPage: null,
    };
  }

  componentDidMount() {
    this.getStat();
  }

  async hasHardware() {
    let permission = await LocalAuthentication.hasHardwareAsync();
    if (permission) {
      let type = await LocalAuthentication.supportedAuthenticationTypesAsync();
      let isFinger = type.includes(1);
      if (isFinger) {
        let enroll = await LocalAuthentication.isEnrolledAsync();
        if (enroll) {
          let authenticate = await LocalAuthentication.authenticateAsync({
            disableDeviceFallback: true,
            promptMessage: t("loginregister.programlock.useFingerPrint"),
            cancelLabel: t("actions.cancel"),
            fallbackLabel: t("form.labels.password"),
          });
          if (authenticate !== null) {
            if (authenticate.success) {
              await AsyncStorage.setItem("haveFinger", "Haved");
              if (
                this.state.prevPage == "Settings" ||
                this.state.prevPage === "Settings"
              ) {
                this.props.navigation.pop();
              } else {
                const { userToken, setUserToken } = this.context;
                this.setState({ setFinger: true });
                await AsyncStorage.setItem(
                  "@token",
                  this.props.route.params.token
                );
                setUserToken(this.props.route.params.token);
              }
            }
          }
        }
      }
    }
  }

  async onCancel() {
    await AsyncStorage.removeItem("haveFinger");
    await AsyncStorage.setItem("@token", this.props.route.params.token);
    const { userToken, setUserToken } = this.context;
    setUserToken(this.props.route.params.token);
  }

  async getStat() {
    this.setState({ prevPage: this.props.route.params.prevPage });
    await AsyncStorage.removeItem("haveFinger");
    AsyncStorage.getItem("haveFinger").then((a) => {
      if (a != null && a !== null) {
        this.setState({ setFinger: true });
      } else {
        this.hasHardware();
      }
    });
  }

  render() {
    return (
      <View style={[styles.container, Styles.center]}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <TouchableOpacity
          onPress={() => this.onCancel()}
          style={{
            width: 105,
            height: 42,
            position: "absolute",
            top: Constants.statusBarHeight,
            right: Constants.statusBarHeight,
          }}
        >
          <TextComponent color={Colors.error} size={FontSize.xl}>
            {t("buttons.cancel")}
          </TextComponent>
        </TouchableOpacity>

        <Ionicons
          name="finger-print-outline"
          size={FontSize.xxxl * 5}
          color="black"
        />
        <TextComponent
          color={Colors.black}
          size={FontSize.xxxl}
          style={{
            marginTop: Constants.statusBarHeight,
          }}
        >
          {t("titles.setfinger")}
        </TextComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
