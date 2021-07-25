import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import TextComponent from "../../../../constants/TextComponent";
import { Styles, Colors, FontSize } from "../../../../constants/Theme";
const { width } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";
import { t } from "../../../../functions/lang";

class Product extends React.Component {
  constructor(props) {
    super(props);
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
  }

  deleteProduct(item) {
    this.props.removeCard(item);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, Styles.center]}
        onPress={() =>
          this.props.navigation.navigate("Bucket", {
            screen: "ProductOne",
            params: {
              id: this.props.data.id,
            },
          })
        }
      >
        <View
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: 999,
            width: 80,
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: Colors.error,
              marginRight: 3,
            }}
          />
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: Colors.success,
            }}
          />
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: Colors.black,
            }}
          />
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: Colors.primary2,
            }}
          />
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: Colors.primary1,
            }}
          />
        </View>
        <Image
          source={{ uri: this.props.data.images[0] }}
          style={{
            width: "75%",
            height: "75%",
            position: "absolute",
            top: "2%",
          }}
        />

        {this.props.bucketitems.find(
          (element) => element.id == this.props.data.id
        ) ? (
          <TouchableOpacity
            onPress={() => this.deleteProduct(this.props.data)}
            style={[
              Styles.center,
              Styles.shadow,
              {
                width: 40,
                height: 40,
                borderRadius: 25,
                backgroundColor: Colors.primary2,
                position: "absolute",
                top: 0,
                right: 0,
              },
            ]}
          >
            <FontAwesome name="cart-arrow-down" size={20} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => this.addProduct(this.props.data)}
            style={[
              Styles.center,
              Styles.shadow,
              {
                width: 40,
                height: 40,
                borderRadius: 25,
                backgroundColor: Colors.primary2,
                position: "absolute",
                top: 0,
                right: 0,
              },
            ]}
          >
            <FontAwesome name="shopping-cart" size={20} color="black" />
          </TouchableOpacity>
        )}

        <View
          style={Styles.center}
          style={{
            position: "absolute",
            bottom: "5%",
            left: "4%",
            right: "4%",
          }}
        >
          <TextComponent
            size={FontSize.xxxl / 2}
            family="RobotoMono_bold"
            style={{
              flex: 1,
              flexShrink: 1,
              flexWrap: "wrap",
            }}
          >
            {this.props.data.name}
          </TextComponent>
          <TextComponent
            size={FontSize.m}
            family="RobotoMono_bold"
            style={{
              flex: 1,
              flexShrink: 1,
              flexWrap: "wrap",
            }}
          >
            {this.props.data.price} AZN
          </TextComponent>
        </View>
      </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(Product);

const styles = StyleSheet.create({
  container: {
    width: 180,
    backgroundColor: Colors.white,
    marginRight: 10,
    marginBottom: 10,
    height: 250,
    borderRadius: 20,
  },
});
