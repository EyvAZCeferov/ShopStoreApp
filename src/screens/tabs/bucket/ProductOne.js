import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
const { width } = Dimensions.get("window");
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import TextComponent from "../../../constants/TextComponent";
import Banner from "../home/components/Banner";
import Constants from "expo-constants";
import { connect } from "react-redux";
import SnBar from "../../../constants/SnBAR";
import { t } from "../../../functions/lang";

class ProductOne extends React.Component {
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
          attributes: [
            { id: 1, key: "Producer", value: "Apple" },
            { id: 2, key: "Processor", value: "Apple M1" },
            { id: 3, key: "Device type", value: "Smartphone" },
            { id: 4, key: "Operating system", value: "IOS" },
            { id: 5, key: "Body material", value: "Alüminium and glass" },
            { id: 6, key: "Random Access Memory", value: "4 GB" },
            { id: 7, key: "Internal Memory", value: "128 GB" },
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
          attributes: [
            { id: 1, key: "Producer", value: "Apple" },
            { id: 2, key: "Processor", value: "Apple M1" },
            { id: 3, key: "Device type", value: "Smartphone" },
            { id: 4, key: "Operating system", value: "IOS" },
            { id: 5, key: "Body material", value: "Alüminium and glass" },
            { id: 6, key: "Random Access Memory", value: "4 GB" },
            { id: 7, key: "Internal Memory", value: "128 GB" },
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
          attributes: [
            { id: 1, key: "Producer", value: "Apple" },
            { id: 2, key: "Processor", value: "Apple M1" },
            { id: 3, key: "Device type", value: "Smartphone" },
            { id: 4, key: "Operating system", value: "IOS" },
            { id: 5, key: "Body material", value: "Alüminium and glass" },
            { id: 6, key: "Random Access Memory", value: "4 GB" },
            { id: 7, key: "Internal Memory", value: "128 GB" },
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
          attributes: [
            { id: 1, key: "Producer", value: "Apple" },
            { id: 2, key: "Processor", value: "Apple M1" },
            { id: 3, key: "Device type", value: "Smartphone" },
            { id: 4, key: "Operating system", value: "IOS" },
            { id: 5, key: "Body material", value: "Alüminium and glass" },
            { id: 6, key: "Random Access Memory", value: "4 GB" },
            { id: 7, key: "Internal Memory", value: "128 GB" },
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
          attributes: [
            { id: 1, key: "Producer", value: "Apple" },
            { id: 2, key: "Processor", value: "Apple M1" },
            { id: 3, key: "Device type", value: "Smartphone" },
            { id: 4, key: "Operating system", value: "IOS" },
            { id: 5, key: "Body material", value: "Alüminium and glass" },
            { id: 6, key: "Random Access Memory", value: "4 GB" },
            { id: 7, key: "Internal Memory", value: "128 GB" },
          ],
        },
      ],
      product: null,
      visible: false,
      snackBarMessage: null,
      snackBarStyle: null,
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.product !== this.state.product) {
      this.getProducts();
      console.log(prevProps);
      console.log(prevState);
    }
  }

  renderItem({ item, index }) {
    return (
      <Image
        key={index}
        source={{ uri: item }}
        style={{
          width: width,
          height: width,
        }}
      />
    );
  }

  addProduct(item) {
    var qyt = item.qyt ?? 0 + 1;
    var data = {
      name: item.name,
      qyt: qyt,
      price: item.price,
      images: item.images,
      id: item.id,
    };
    this.props.addtoCard(data);
    this.setState({
      visible: true,
      snackBarMessage: t("actions.added"),
      snackBarStyle: "success",
    });
    setTimeout(() => {
      this.setState({ visible: false });
    }, 1500);
  }

  deleteProduct(item) {
    this.props.removeCard(item);

    this.setState({
      visible: true,
      snackBarMessage: t("actions.deleted"),
      snackBarStyle: "error",
    });
    setTimeout(() => {
      this.setState({ visible: false });
    }, 1500);
  }

  renderItem({ item, index }) {
    return (
      <View
        key={index}
        style={[
          Styles.center,
          {
            width: width - 50,
            height: 65,
            backgroundColor: Colors.white,
            marginVertical: 1.5,
            borderColor: Colors.black,
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          },
        ]}
      >
        <View
          style={[
            Styles.center,
            {
              borderColor: Colors.black,
              borderWidth: 0.5,
              width: "50%",
              height: "100%",
            },
          ]}
        >
          <TextComponent size={FontSize.m} color={Colors.black}>
            {item.key}
          </TextComponent>
        </View>
        <View
          style={[
            Styles.center,
            {
              borderColor: Colors.black,
              borderWidth: 0.5,
              width: "50%",
              height: "100%",
            },
          ]}
        >
          <TextComponent size={FontSize.m} color={Colors.black}>
            {item.value}
          </TextComponent>
        </View>
      </View>
    );
  }

  goBack() {
    if (this.props.route.state != undefined || this.props.route.state != null) {
      this.props.navigation.pop();
    } else {
      this.props.navigation.navigate("Bucket", { screen: "Buckets" });
      this.props.navigation.navigate("Home", { screen: "Home" });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primary1} barStyle="light-content" />
        <View style={[Styles.center, styles.header]}>
          <TouchableOpacity onPress={() => this.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <TextComponent
            size={
              this.state.product.name.length > FontSize.l
                ? FontSize.s
                : FontSize.l
            }
            color={Colors.white}
          >
            {this.state.product.name}
          </TextComponent>
          {this.props.bucketitems.find(
            (element) => element.id == this.props.route.params.id
          ) ? (
            <TouchableOpacity
              onPress={() => this.deleteProduct(this.state.product)}
              style={[
                Styles.center,
                Styles.shadow,
                {
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  backgroundColor: Colors.primary2,
                },
              ]}
            >
              <FontAwesome name="cart-arrow-down" size={20} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => this.addProduct(this.state.product)}
              style={[
                Styles.center,
                Styles.shadow,
                {
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  backgroundColor: Colors.primary2,
                },
              ]}
            >
              <FontAwesome name="shopping-cart" size={20} color="black" />
            </TouchableOpacity>
          )}
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
              size={FontSize.l * 2}
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
              because it is pleasure.
            </TextComponent>

            <View style={[Styles.center, { width }]}>
              <TouchableOpacity
                style={[
                  Styles.center,
                  {
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: Colors.primary2,
                    marginVertical: Constants.statusBarHeight,
                  },
                ]}
                onPress={() =>
                  this.props.navigation.navigate("Messages", {
                    data: this.state.product,
                  })
                }
              >
                <Entypo name="chat" size={25} color="black" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={this.state.product.attributes}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={{ marginVertical: 3 }} />
          </ScrollView>
        </View>

        <SnBar
          visible={this.state.visible}
          changeVisible={() => this.setState({ visible: false })}
          snackBarMessage={this.state.snackBarMessage}
          snackBarStyle={this.state.snackBarStyle}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bucketitems: state.bucketitems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addtoCard: (product) => dispatch({ type: "ADD_TO_CART", payload: product }),
    removeCard: (product) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: product }),
    updateVal: (product) => dispatch({ type: "UPDATE_CART", payload: product }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductOne);

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
    flex: 0.5,
    marginTop: Constants.statusBarHeight,
  },
});
