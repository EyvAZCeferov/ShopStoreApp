import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { t } from "../../../functions/lang";
import TextComponent from "../../../constants/TextComponent";
const { width } = Dimensions.get("window");
import Constants from "expo-constants";

export default class OneCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
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
            justifyContent: "space-between",
            height: 120,
            width: "50%",
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
          <TextComponent size={FontSize.m} color={Colors.black}>
            1 {t("descriptions.catcount")}
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
        <View
          style={{
            width: "13%",
            height: 60,
          }}
        />
      </TouchableOpacity>
    );
  }

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
            {t("titles.check")}
          </TextComponent>
          <View />
        </View>
        <View style={styles.content}>
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

          <FlatList
            data={this.state.product}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem.bind(this)}
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
    backgroundColor: Colors.primary1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    flex: 0.9,
  },
});
