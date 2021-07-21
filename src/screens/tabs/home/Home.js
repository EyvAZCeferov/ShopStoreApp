import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Colors, Styles, FontSize } from "../../../constants/Theme";
import Banner from "./components/Banner";
import TextComponent from "../../../constants/TextComponent";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import Categories from "./components/Categories";
import Constants from "expo-constants";
import { getLang, t } from "../../../functions/lang";
import Products from "./components/Products";
const { width } = Dimensions.get("window");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [
        {
          id: 1,
          image:
            "https://demo.shopstore.az/image/cache/catalog/000_sliders/AirPods-Max-ru-1220x600-1220x600.jpg",
        },
        {
          id: 2,
          image:
            "https://demo.shopstore.az/image/cache/catalog/000_sliders/main-page-slide-1-Recoveredru-1220x600-1220x600.jpg",
        },
        {
          id: 3,
          image:
            "https://demo.shopstore.az/image/cache/catalog/000_sliders/Tamkart-1220x600-1220x600.jpg",
        },
      ],
      categories: [
        {
          id: 1,
          name: "Kompyuter",
          icon: (
            <MaterialIcons
              name="computer"
              size={FontSize.m * 2}
              color="white"
            />
          ),
          itemCount: 100,
        },
        {
          id: 2,
          name: "Telefon",
          icon: (
            <Feather name="smartphone" size={FontSize.m * 2} color="white" />
          ),
          itemCount: 3500,
        },
        {
          id: 3,
          name: "Qulaqlıq",
          icon: (
            <FontAwesome5
              name="headphones-alt"
              size={FontSize.m * 2}
              color="white"
            />
          ),
          itemCount: 90,
        },
        {
          id: 4,
          name: "Tv",
          icon: <Feather name="tv" size={FontSize.m * 2} color="white" />,
          itemCount: 20,
        },
        {
          id: 5,
          name: "Nömrələr",
          icon: (
            <MaterialCommunityIcons
              name="sim"
              size={FontSize.m * 2}
              color="white"
            />
          ),
          itemCount: 40,
        },
      ],
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

  componentDidMount() {
    getLang();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <View style={styles.header}>
          <View
            style={[
              Styles.center,
              {
                backgroundColor: Colors.white,
                height: 50,
                flexDirection: "row",
                justifyContent: "space-between",
                width: width,
                paddingHorizontal: 20,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <AntDesign name="menufold" size={24} color="black" />
            </TouchableOpacity>
            <TextComponent size={FontSize.xl} color={Colors.black}>
              Shop Store
            </TextComponent>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Feather name="user" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Banner banners={this.state.banners} {...this.props} />
        </View>
        <View style={styles.content}>
          <TextComponent
            color={Colors.white}
            size={FontSize.xxl}
            style={{
              marginTop: 8,
            }}
            family="RobotoMono_bold"
          >
            {t("titles.categories")}
          </TextComponent>
          <Categories
            categories={this.state.categories}
            hide={true}
            active={null}
            {...this.props}
          />
          <TextComponent
            color={Colors.white}
            size={FontSize.xxl}
            style={{
              marginTop: 8,
            }}
            family="RobotoMono_bold"
          >
            {t("titles.popularproducts")}
          </TextComponent>
          <Products products={this.state.products} />
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
    flex: 0.3,
  },
  content: {
    flex: 0.7,
    backgroundColor: Colors.primary1,
    paddingHorizontal: Constants.statusBarHeight / 2,
  },
});
