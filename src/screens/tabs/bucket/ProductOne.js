import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
const { width } = Dimensions.get("window");
import { AntDesign } from "@expo/vector-icons";
import TextComponent from "../../../constants/TextComponent";
import Banner from "../home/components/Banner";
import Constants from "expo-constants";

export default class ProductOne extends React.Component {
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
      product: null,
    };
  }

  getProduct() {
    return this.state.products.map((e) => {
      if (this.props.route.params.id == e.id) {
        this.setState({
          product: e,
        });
      }
    });
  }

  componentWillMount() {
    this.getProduct();
  }

  renderItem({ item, index }) {
    return (
      <Image
        source={{ uri: item }}
        style={{
          width: width,
          height: width,
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primary1} barStyle="light-content" />
        <View style={[Styles.center, styles.header]}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Home", { screen: "Home" });
            }}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <TextComponent size={FontSize.xxxl} color={Colors.white}>
            {this.state.product.name}
          </TextComponent>
          <View />
        </View>
        <View style={styles.content}>
          <View style={styles.top}>
            <Banner
              banners={this.state.product.images}
              product={true}
              {...this.props}
            />
          </View>
          <ScrollView
            style={{ flex: 0.3, paddingHorizontal: Constants.statusBarHeight }}
          >
            <View style={{ marginVertical: 5 }} />

            <TextComponent
              size={FontSize.xl * 2}
              color={Colors.primary2}
              style={{
                textAlign: "center",
              }}
            >
              {this.state.product.price} AZN
            </TextComponent>
            <View style={{ marginVertical: 5 }} />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                zIndex: 999,
                width: width,
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: Colors.error,
                  marginRight: 3,
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: Colors.success,
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: Colors.black,
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: Colors.primary2,
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: Colors.primary1,
                }}
              />
            </View>
            <View style={{ marginVertical: 10 }} />

            <TextComponent>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </TextComponent>
          </ScrollView>
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
  top: {
    flex: 0.7,
    marginTop: Constants.statusBarHeight,
  },
});
