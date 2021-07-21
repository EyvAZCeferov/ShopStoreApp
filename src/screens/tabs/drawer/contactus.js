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
  StatusBar,
} from "react-native";
import Header from "./components/header";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import TextComponent from "../../../constants/TextComponent";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
import { t } from "../../../functions/lang";
const image = require("../../../../assets/helper/contact.png");
import Constants from "expo-constants";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          link: "mailto:hi@shopstore.az",
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
          link: "https://shopstore.az",
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
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primary1} barStyle="dark-content" />
        <View style={styles.header}>
          <Header name={t("drawer.contactus")} {...this.props} />
        </View>
        <View style={styles.content}>
          <Image
            source={image}
            style={{
              width: "100%",
              height: 225,
              marginBottom: 8,
            }}
            resizeMode="contain"
          />
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 0.1,
  },
  content: {
    flex: 0.9,
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
});
