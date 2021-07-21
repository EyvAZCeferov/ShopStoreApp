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
import { Colors, FontSize, Styles } from "../../../constants/Theme";
import { t } from "../../../functions/lang";
const { width } = Dimensions.get("window");
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";
import { LiteCreditCardInput } from "react-native-credit-card-input";

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null,
    };
  }

  _onChange = (data) => {
    this.setState({ card: data.values });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.primary1}
          barStyle={"light-content"}
        />
        <View style={[Styles.center, styles.header]}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <TextComponent size={FontSize.xxxl} color={Colors.white}>
            {t("titles.checkout")}
          </TextComponent>
          <View />
        </View>
        <View style={[styles.content]}>
          <View
            style={[
              Styles.shadow,
              {
                width: width - 50,
                height: width / 2.2,
                backgroundColor: Colors.white,
                marginLeft: Constants.statusBarHeight / 1.2,
                marginVertical: Constants.statusBarHeight / 2,
              },
            ]}
          >
            <View style={{ marginVertical: 11 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TextComponent size={FontSize.s}>
                {t("extra.subtotal")}
              </TextComponent>
              <TextComponent size={FontSize.l}>0.5 AZN</TextComponent>
            </View>
            <View style={{ marginVertical: 5 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TextComponent size={FontSize.s}>{t("extra.tax")}</TextComponent>
              <TextComponent size={FontSize.l}>2.5 AZN</TextComponent>
            </View>
            <View style={{ marginVertical: 5 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TextComponent size={FontSize.s}>
                {t("extra.delivery")}
              </TextComponent>
              <TextComponent size={FontSize.l}>{t("extra.free")}</TextComponent>
            </View>
            <View style={{ marginVertical: 5 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TextComponent size={FontSize.s}>
                {t("extra.productcount")}
              </TextComponent>
              <TextComponent size={FontSize.l}>1</TextComponent>
            </View>
            <View style={{ marginVertical: 5 }} />
          </View>

          <View
            style={{
              marginVertical: 15,
              marginHorizontal: 15,
            }}
          >
            <TextComponent
              size={FontSize.xxxl}
              color={Colors.black}
              style={{
                marginBottom: 15,
              }}
            >
              {t("extra.deliveryaddress")}
            </TextComponent>

            <View style={[Styles.center, styles.inputArena]}>
              <TouchableOpacity style={[styles.inputIconButton, Styles.center]}>
                <FontAwesome5 name="map-marker-alt" size={24} color="black" />
              </TouchableOpacity>
              <TextInput style={styles.input} placeholder={t("form.loc")} />
            </View>

            <TextComponent
              size={FontSize.xxxl}
              color={Colors.black}
              style={{
                marginTop: 15,
              }}
            >
              {t("extra.paymentCard")}
            </TextComponent>

            <View
              style={[
                Styles.center,
                styles.inputArena,
                {
                  marginTop: 15,
                  width: width - 50,
                  marginLeft: Constants.statusBarHeight - 8,
                },
              ]}
            >
              <TouchableOpacity style={[styles.inputIconButton, Styles.center]}>
                <AntDesign name="creditcard" size={24} color="black" />
              </TouchableOpacity>
              <View style={{ width: 60, height: 5 }} />
              <LiteCreditCardInput
                keyboardShouldPersistTaps="handled"
                keyboardType="number-pad"
                onChange={this._onChange}
                style={styles.input}
              />
            </View>
          </View>
        </View>
        <View style={[Styles.center, styles.footer]}>
          <TouchableOpacity
            style={[Styles.center, styles.button]}
            onPress={() => this.props.navigation.navigate("OneCheck")}
          >
            <TextComponent color={Colors.white} size={FontSize.xl}>
              {t("buttons.pay")}
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
  },
  header: {
    flex: 0.1,
    backgroundColor: Colors.primary1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    flex: 0.8,
  },
  footer: {
    flex: 0.1,
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
    width: width - 70,
    height: "100%",
    borderBottomColor: Colors.primary2,
    borderBottomWidth: 2,
    paddingLeft: 11,
    fontSize: FontSize.m,
    fontFamily: "RobotoMono_medium",
  },

  button: {
    width: width / 1.25,
    height: 50,
    backgroundColor: Colors.primary2,
    borderRadius: 15,
  },
});
