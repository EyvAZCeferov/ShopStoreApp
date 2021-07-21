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
import { getLang, t } from "../../../functions/lang";
import CodeFieldSetPass from "./components/CodeFieldSetPass";
import NumberButtons from "./components/NumberButtons";
const { width } = Dimensions.get("window");
var reqems = "";
import { Ionicons } from "@expo/vector-icons";

export default class ProgramLock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass1: "",
      pass2: "",
      hasFingerPrintHardware: false,
    };
  }

  changeVal(val) {
    reqems = reqems + val;
    if (this.state.pass1.length <= 3) {
      this.setState({ pass1: reqems });
      if (this.state.pass1.length === 3) {
        reqems = "";
      }
    } else if (this.state.pass1.length > 3) {
      this.setState({ pass2: reqems });
      if (this.state.pass2.length === 3) {
        reqems = "";
      }
    }
  }

  async getSoragePerm() {
    await AsyncStorage.getItem("haveFinger").then((a) => {
      if (a != null) {
        this.hasHardware();
      }
    });
  }

  clearVal() {
    reqems = "";
    this.setState({ pass1: "", pass2: "" });
  }

  async completed() {
    const { program, setProgram } = this.context;
    if (this.state.pass == (await AsyncStorage.getItem("localAuthPass"))) {
      this.setState({
        visible: true,
        snackBarMessage: t("form.validation.loginregister.login.success"),
        snackBarStyle: "success",
      });
      setProgram(true);
      this.clearVal();

      setTimeout(() => {
        this.setState({ visible: false });
      }, 500);
    } else {
      this.setState({
        visible: true,
        snackBarMessage: t("snackbar.mobileveridywrong"),
        snackBarStyle: "error",
      });
      this.clearVal();
      setTimeout(() => {
        this.setState({ visible: false });
      }, 500);
    }
  }

  async callFinger() {
    let enroll = await LocalAuthentication.isEnrolledAsync();
    if (enroll) {
      let authenticate = await LocalAuthentication.authenticateAsync({
        promptMessage: t("loginregister.programlock.useFingerPrint"),
        cancelLabel: t("actions.cancel"),
        fallbackLabel: t("form.labels.password"),
        disableDeviceFallback: true,
      });
      if (authenticate != null) {
        if (authenticate.success) {
          this.setState({
            visible: true,
            snackBarMessage: t("form.validation.loginregister.login.success"),
            snackBarStyle: "success",
          });
          setProgram(true);
          this.clearVal();
          setTimeout(() => {
            this.setState({ visible: false });
          }, 500);
          const { program, setProgram } = this.context;
        }
      }
    }
  }

  componentDidMount() {
    getLang();
    this.getSoragePerm();
  }

  async hasHardware() {
    let permission = await LocalAuthentication.hasHardwareAsync();
    if (permission) {
      let type = await LocalAuthentication.supportedAuthenticationTypesAsync();
      let isFinger = type.includes(1);
      if (isFinger) {
        this.callFinger();
        this.setState({
          hasFingerPrintHardware: isFinger,
        });
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primary1} barStyle="light-content" />
        <View style={[styles.header, Styles.center]}>
          <TextComponent
            color={Colors.white}
            size={FontSize.m * 2}
            style={{
              marginVertical: Constants.statusBarHeight,
            }}
          >
            {t("titles.welcome")}
          </TextComponent>
          <View
            style={{
              width: width - 50,
              marginVertical: 6,
            }}
          >
            <CodeFieldSetPass
              completed={() => this.completed()}
              value={this.state.pass1}
              {...this.props}
            />
          </View>
          <TextComponent
            color={Colors.white}
            size={FontSize.xxxl}
            style={{
              marginTop: 15,
            }}
          >
            {t("form.name")}
          </TextComponent>
        </View>
        <View style={styles.content}>
          <NumberButtons
            clearVal={() => this.clearVal()}
            changeVal={(e) => this.changeVal(e)}
            {...this.props}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[
              Styles.center,
              {
                flex: 1,
              },
            ]}
            onPress={() => this.props.navigation.navigate("Forgetpass")}
          >
            <Ionicons
              name="lock-open-outline"
              size={FontSize.s * 2}
              color="black"
            />
            <TextComponent color={Colors.black} size={FontSize.xs}>
              {t("titles.forgetpass")}
            </TextComponent>
          </TouchableOpacity>
          {this.state.hasFingerPrintHardware ? (
            <TouchableOpacity
              style={[
                Styles.center,
                {
                  flex: 1,
                },
              ]}
              onPress={() => this.callFinger()}
            >
              <Ionicons
                name="finger-print-sharp"
                size={FontSize.s * 2}
                color="black"
              />
              <TextComponent color={Colors.black} size={FontSize.xs}>
                {t("buttons.testfinger")}
              </TextComponent>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.35,
    backgroundColor: Colors.primary1,
    paddingHorizontal: Constants.statusBarHeight,
  },
  content: {
    flex: 0.55,
  },
  footer: {
    flex: 0.1,
    backgroundColor: Colors.primary2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
