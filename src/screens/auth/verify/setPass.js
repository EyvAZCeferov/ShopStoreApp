import React from "react";
import { View, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Styles, Colors, FontSize } from "../../../constants/Theme";
import TextComponent from "../../../constants/TextComponent";
import Constants from "expo-constants";
import { t } from "../../../functions/lang";
import CodeFieldSetPass from "./components/CodeFieldSetPass";
import NumberButtons from "./components/NumberButtons";
const { width } = Dimensions.get("window");
var reqems = "";

export default class SetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass1: "",
      pass2: "",
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

  clearVal() {
    reqems = "";
    this.setState({ pass1: "", pass2: "" });
  }

  async completed() {
    const { userToken, setUserToken } = this.context;
    const params = this.props.route.params;
    if (this.state.pass1 !== "" && this.state.pass2 !== "") {
      if (this.state.pass1 == this.state.pass2) {
        await AsyncStorage.setItem("localAuthPass", this.state.pass1);
        if (params.prevpage == "Settings") {
          this.props.navigation.pop();
        } else {
          if (this.state.setFinger == true) {
            this.props.navigation.navigate("SetFinger", {
              token: params.token,
            });
          } else {
            await AsyncStorage.setItem("@token", params.token);
            setUserToken(params.token);
          }
        }
      } else {
        this.clearVal();
      }
    } else {
      this.clearVal();
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
            {t("titles.setpass")}
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
            <TextComponent
              color={Colors.white}
              size={FontSize.xs}
              style={{
                marginTop: 8,
              }}
            >
              {t("descriptions.pass1")}
            </TextComponent>
          </View>
          <View
            style={{
              width: width - 50,
              marginVertical: 6,
            }}
          >
            <CodeFieldSetPass
              completed={() => this.completed()}
              value={this.state.pass2}
              {...this.props}
            />
            <TextComponent
              color={Colors.white}
              size={FontSize.xs}
              style={{
                marginTop: 8,
              }}
            >
              {t("descriptions.pass2")}
            </TextComponent>
          </View>
        </View>
        <View style={styles.content}>
          <NumberButtons
            clearVal={() => this.clearVal()}
            changeVal={(e) => this.changeVal(e)}
            {...this.props}
          />
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
    flex: 0.4,
    backgroundColor: Colors.primary1,
    paddingHorizontal: Constants.statusBarHeight,
  },
  content: {
    flex: 0.6,
    paddingVertical: Constants.statusBarHeight,
  },
});
