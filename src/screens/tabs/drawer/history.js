import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import TextComponent from "../../../constants/TextComponent";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
import { t } from "../../../functions/lang";
import Header from "./components/header";
const { width } = Dimensions.get("window");
import Constants from "expo-constants";

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      histories: [
        {
          id: 1,
          name: "Iphone 11 128GB",
          price: 1819.0,
          images: [
            "https://demo.shopstore.az/image/cache/catalog/Phones/Apple/iphone-11-128gb-500x600.png",
            "https://demo.shopstore.az/image/cache/catalog/11%20black%202-570x684.jpg",
            "https://demo.shopstore.az/image/cache/catalog/11%20black%203-570x684.jpg",
          ],
        },
      ],
    };
  }

  renderItem({ item, index }) {
    return (
      <TouchableOpacity
        style={[
          Styles.center,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: Constants.statusBarHeight / 2,
            marginBottom: Constants.statusBarHeight / 2,
          },
        ]}
        key={index}
        onPress={() =>
          this.props.navigation.navigate("Bucket", {
            screen: "OneCheck",
            params: {
              id: item.id,
            },
          })
        }
      >
        <Image
          source={{ uri: item.images[0] }}
          width={width / 2 - 50}
          height={width / 2 - 50}
          style={{
            width: width / 2 - 50,
            height: width / 2 - 50,
          }}
        />
        <View
          style={{
            marginRight: 10,
            marginLeft: 3,
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "space-around",
            height: 120,
            width: "40%",
          }}
        >
          <TextComponent
            color={Colors.primary1}
            size={FontSize.s}
            style={{
              flex: 1,
              flexShrink: 1,
              flexWrap: "wrap",
            }}
          >
            {item.name}
          </TextComponent>

          <TextComponent
            color={Colors.primary2}
            size={FontSize.l}
            style={{
              flex: 1,
              flexShrink: 1,
              flexWrap: "wrap",
            }}
          >
            {item.price} AZN
          </TextComponent>
        </View>
        <View />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primary1} barStyle="light-content" />
        <View style={styles.header}>
          <Header name={t("drawer.history")} {...this.props} />
        </View>
        <View style={styles.content}>
          {this.state.histories.length > 0 && this.state.histories != null ? (
            <FlatList
              data={this.state.histories}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem.bind(this)}
            />
          ) : (
            <View style={[styles.container, Styles.center]}>
              <TextComponent size={FontSize.xxxl} color={Colors.error}>
                {t("extra.noresult")}
              </TextComponent>
            </View>
          )}
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
    backgroundColor: Colors.primary1,
  },
  content: {
    flex: 0.9,
  },
});
