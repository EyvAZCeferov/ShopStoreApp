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
import {
  AntDesign,
  FontAwesome5,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Constants from "expo-constants";
import Categories from "../home/components/Categories";
import Products from "../home/components/Products";
import { reset } from "../../../functions/helper";

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 1,
          name: "Kompyuter",
          icon: (
            <MaterialIcons
              name="computer"
              size={FontSize.m * 2}
              color={Colors.primary1}
            />
          ),
          itemCount: 100,
        },
        {
          id: 2,
          name: "Telefon",
          icon: (
            <Feather
              name="smartphone"
              size={FontSize.m * 2}
              color={Colors.primary1}
            />
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
              color={Colors.primary1}
            />
          ),
          itemCount: 90,
        },
        {
          id: 4,
          name: "Tv",
          icon: (
            <Feather name="tv" size={FontSize.m * 2} color={Colors.primary1} />
          ),
          itemCount: 20,
        },
        {
          id: 5,
          name: "Nömrələr",
          icon: (
            <MaterialCommunityIcons
              name="sim"
              size={FontSize.m * 2}
              color={Colors.primary1}
            />
          ),
          itemCount: 40,
        },
      ],
      category: null,
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

  getCat() {
    return this.state.categories.map((e) => {
      if (this.props.route.params.id == e.id) {
        this.setState({
          category: e,
        });
      }
    });
  }

  componentWillMount() {
    this.getCat();
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
            {this.state.category.name}
          </TextComponent>
          <View />
        </View>
        <View style={[styles.content]}>
          <View style={{ paddingHorizontal: 8 }}>
            <Categories
              categories={this.state.categories}
              hide={true}
              active={this.state.category.id - 1}
              {...this.props}
              color={Colors.primary1}
            />
          </View>
          <View style={{ paddingHorizontal: 8, flex: 1 }}>
            <Products products={this.state.products} {...this.props} />
          </View>
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
});
