import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import TextComponent from "../../../constants/TextComponent";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
import { t } from "../../../functions/lang";
import Constants from "expo-constants";
const { width } = Dimensions.get("window");
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

export default class Buckets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
        {
          id: 2,
          name: "iPhone 11 Pro 256 GB",
          price: 2549.99,
          images: [
            "https://demo.shopstore.az/image/cache/catalog/iphone-11-pro-max-64-gb-500x600.jpg",
            "https://demo.shopstore.az/image/cache/catalog/11%20gold%204-570x684.jpg",
            "https://demo.shopstore.az/image/cache/catalog/gold%2011%202-570x684.jpg",
          ],
        },
        {
          id: 3,
          name: "Alcatel Tab 1T 7.0-inch 32GB",
          price: 209.0,
          images: [
            "https://demo.shopstore.az/image/cache/catalog/Plansets/Alcatel/alcatel_alcatel1T7_component_mobile_1-500x600.png",
            "https://demo.shopstore.az/image/cache/catalog/Plansets/Alcatel/download-570x684.png",
          ],
        },
        {
          id: 4,
          name: "Apple Airpods 2 MV7N2",
          price: 339.99,
          images: [
            "https://demo.shopstore.az/image/cache/catalog/apple-airpods-2-mv7n2-500x600.jpg",
            "https://demo.shopstore.az/image/cache/catalog/iKlinikstores-Product-AirPods-BG-2-570x684.jpg",
            "https://demo.shopstore.az/image/cache/catalog/iKlinikstores-Product-AirPods-BG-570x684.jpg",
            "https://demo.shopstore.az/image/cache/catalog/0039175_4-570x684.png",
          ],
        },
        {
          id: 5,
          name: "Apple Pencil üçün Dəri Keys, (MPQL2)",
          price: 80.0,
          images: [
            "https://demo.shopstore.az/image/cache/catalog/skin-keys-for-apple-pencil-mpql2-500x600.jpg",
            "https://demo.shopstore.az/image/cache/catalog/apple-pencil-case-taupe-2.1000x1000-570x684.jpg",
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
        >
          <TouchableOpacity
            style={[
              Styles.center,
              {
                width: "100%",
                height: "100%",
                backgroundColor: Colors.success,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              },
            ]}
          >
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.center,
              {
                width: "100%",
                height: "100%",
                backgroundColor: Colors.error,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
              },
            ]}
          >
            <AntDesign name="delete" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primary1} barStyle="light-content" />
        <View style={[Styles.center, styles.header]}>
          <View style={{ width: "20%" }} />
          <TextComponent color={Colors.white} size={FontSize.xxxl}>
            {t("titles.buckets")}
          </TextComponent>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Checkout")}
            style={[
              Styles.center,
              {
                width: 65,
                height: 40,
                backgroundColor: Colors.primary2,
                borderRadius: 150,
              },
            ]}
          >
            <Entypo name="check" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <FlatList
            data={this.state.products}
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
