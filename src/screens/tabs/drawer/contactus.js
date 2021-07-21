import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Keyboard,
  TouchableOpacity,
  Linking,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import Header from "./components/header";
import TextComponent from "../../../constants/TextComponent";
const { width } = Dimensions.get("window");
import { t } from "../../../functions/lang";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import Constants from "expo-constants";
import axios from "axios";
import FormData from "form-data";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
import SnBar from "../../../constants/SnBAR";
const image = require("../../../../assets/helper/contact.png");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: null,
      message: null,
      visible: false,
      snackBarMessage: null,
      snackBarStyle: null,
      socials: [
        {
          id: 1,
          name: "G-mail",
          icon: (
            <MaterialCommunityIcons
              name="gmail"
              size={FontSize.l}
              color="black"
            />
          ),
          link: "mailto:support@paygo.az",
          visibleName: true,
        },
        {
          id: 2,
          name: "Messenger",
          icon: (
            <MaterialCommunityIcons
              name="facebook-messenger"
              size={FontSize.l}
              color="black"
            />
          ),
          link: "null",
          visibleName: true,
        },
        {
          id: 3,
          name: "Link",
          icon: <AntDesign name="link" size={FontSize.l} color="black" />,
          link: "https://paygo.az",
          visibleName: true,
        },
        {
          id: 4,
          name: "Facebook",
          icon: (
            <FontAwesome5 name="facebook-f" size={FontSize.l} color="black" />
          ),
          link: "https://facebook.com",
          visibleName: true,
        },
        {
          id: 5,
          name: "Instagram",
          icon: (
            <FontAwesome5 name="instagram" size={FontSize.l} color="black" />
          ),
          link: "https://instagram.com",
          visibleName: true,
        },
        {
          id: 6,
          name: "Youtube",
          icon: <FontAwesome name="youtube-play" size={24} color="black" />,
          link: "https://youtube.com",
          visibleName: true,
        },
      ],
    };
  }

  sendMessage = async () => {
    Keyboard.dismiss();
    var data = new FormData();
    data.append("subject", this.state.subject);
    data.append("message", this.state.message);
    await axios.post("actions/contact", data).then((e) => {
      this.setState({
        visible: true,
        snackBarMessage: t("actions.sended"),
        snackBarStyle: "success",
        subject: null,
        message: null,
      });
      setTimeout(() => {
        this.setState({ visible: false });
      }, 1500);
    });
  };

  renderItem({ item, index }) {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.social, Styles.center]}
        onPress={() => Linking.openURL(item.link)}
      >
        {item.visibleName == false ? (
          <Text style={styles.ifName}>{item.name}</Text>
        ) : (
          item.icon
        )}
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Heder {...this.props} name={t("drawer.contactus")} />

          <View style={styles.header}>
            <View
              style={{
                flex: 0.7,
              }}
            >
              <Image
                source={image}
                style={{
                  width: "100%",
                  height: 225,
                  marginBottom: 8,
                }}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                flex: 0.3,
              }}
            >
              <FlatList
                data={this.state.socials}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={this.renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  marginTop: Constants.statusBarHeight / 2,
                  marginHorizontal: Constants.statusBarHeight,
                }}
              />
            </View>
          </View>

          <View style={[styles.content, Styles.center]}>
            <TextComponent
              style={{
                fontSize: FontSize.l * 2,
                color: Colors.green1HEX,
                textAlign: "center",
                marginBottom: Constants.statusBarHeight / 3,
                fontFamily: "Poppins_bold",
              }}
            >
              {t("contact.writeUs")}
            </TextComponent>
            <View
              style={{
                flexDirection: "column",
                height: 65,
                width: width - 3 * Constants.statusBarHeight,
                borderColor: "transparent",
                marginBottom: Constants.statusBarHeight,
              }}
            >
              <TextComponent
                style={{
                  width: "100%",
                  marginBottom: 3,
                  fontSize: FontSize.m,
                  color: Colors.blackHEX,
                  fontFamily: "Poppins_bold",
                }}
              >
                {t("form.labels.subject")}{" "}
                <TextComponent style={{ color: "red" }}>*</TextComponent>
              </TextComponent>
              <TextInput
                placeholder="..."
                style={styles.input}
                onChangeText={(val) => {
                  this.setState({ subject: val });
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                height: 85,
                width: width - 3 * Constants.statusBarHeight,
                borderColor: "transparent",
                marginBottom: Constants.statusBarHeight,
              }}
            >
              <TextComponent
                style={{
                  width: "100%",
                  marginBottom: 3,
                  fontSize: FontSize.m,
                  color: Colors.blackHEX,
                  fontFamily: "Poppins_bold",
                }}
              >
                {t("form.labels.content")}{" "}
                <TextComponent style={{ color: "red" }}>*</TextComponent>
              </TextComponent>
              <TextInput
                placeholder="..."
                style={[
                  styles.input,
                  {
                    height: 80,
                  },
                ]}
                numberOfLines={3}
                multiline={true}
                onChangeText={(val) => {
                  this.setState({ message: val });
                }}
              />
            </View>
            <TouchableOpacity
              style={[Styles.center, styles.button]}
              onPress={() => this.sendMessage()}
            >
              <TextComponent
                style={{ fontSize: FontSize.l, color: Colors.whiteHEX }}
              >
                {t("actions.send")}
              </TextComponent>
            </TouchableOpacity>
          </View>

          <SnBar
            visible={this.state.visible}
            changeVisible={() => this.setState({ visible: false })}
            snackBarMessage={this.state.snackBarMessage}
            snackBarStyle={this.state.snackBarStyle}
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
    flex: 0.35,
  },
  content: {
    flex: 0.65,
    backgroundColor: Colors.whiteHEX,
    marginHorizontal: Constants.statusBarHeight,
    paddingHorizontal: Constants.statusBarHeight,
    borderTopLeftRadius: Constants.statusBarHeight,
    borderTopRightRadius: Constants.statusBarHeight,
  },
  text: {
    fontSize: 18,
    color: Colors.blackHEX,
    textAlign: "center",
  },
  social: {
    width: 70,
    height: 40,
    borderRadius: 11,
    marginRight: 5,
    backgroundColor: Colors.whiteHEX,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 3,
  },
  ifName: {
    color: Colors.blackHex,
    fontFamily: "Poppins_bold",
    fontSize: FontSize.s,
  },
  input: {
    width: width - 3 * Constants.statusBarHeight,
    borderRadius: 10,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    paddingLeft: Constants.statusBarHeight,
    fontFamily: "Poppins_bold",
  },
  button: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.green1HEX,
    borderRadius: 19,
    width: 135,
    height: 50,
    marginBottom: Constants.statusBarHeight * 3,
  },
});
