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
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import Categories from "../home/components/Categories";
import { connect } from "react-redux";
import SnBar from "../../../constants/SnBAR";

class Buckets extends React.Component {
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

      visible: false,
      snackBarMessage: null,
      snackBarStyle: null,
    };
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
    var qyt = 0;
    {
      this.props.bucketitems.map((element) => {
        if (element.id == item.id) {
          qyt = element.qyt;
        }
      });
    }
    if (qyt == 1) {
      this.props.removeCard(item);
    } else {
      var value = parseInt(qyt) - 1;
      this.props.updateVal({ item, value });
    }

    this.setState({
      visible: true,
      snackBarMessage: t("actions.deleted"),
      snackBarStyle: "success",
    });
    setTimeout(() => {
      this.setState({ visible: false });
    }, 1500);
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
            screen: "ProductOne",
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
            {item.qyt} {t("descriptions.catcount")}
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
            {item.price * item.qyt} AZN
          </TextComponent>
        </View>
        <View
          style={{
            width: "13%",
            height: 60,
          }}
        >
          {this.props.bucketitems.find((element) => element.id == item.id) ? (
            <View
              style={[
                Styles.center,
                {
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: Colors.primary1,
                  borderTopLeftRadius: 20,
                  width: 30,
                  height: 80,
                },
              ]}
            >
              <TouchableOpacity onPress={() => this.addProduct(item)}>
                <Ionicons name="add" size={FontSize.xl} color={Colors.white} />
              </TouchableOpacity>
              <TextComponent style={{ color: Colors.white }} size={FontSize.s}>
                {this.props.bucketitems.map((element) => {
                  if (element.id == item.id) {
                    return element.qyt;
                  }
                })}
              </TextComponent>
              <TouchableOpacity onPress={() => this.deleteProduct(item)}>
                <MaterialCommunityIcons
                  name="minus"
                  size={FontSize.xl}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={[
                Styles.center,
                {
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: Colors.green1HEX,
                  borderTopLeftRadius: 20,
                  width: 30,
                  height: 30,
                },
              ]}
              onPress={() => this.addProduct(item)}
            >
              <Ionicons name="add" size={FontSize.xl} color={Colors.whiteHEX} />
            </TouchableOpacity>
          )}
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
          <Categories
            categories={this.state.categories}
            hide={true}
            active={null}
            {...this.props}
            color={Colors.primary1}
          />

          {this.props.bucketitems.length > 0 ? (
            <FlatList
              data={this.props.bucketitems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem.bind(this)}
            />
          ) : (
            <View style={[Styles.center, { flex: 1 }]}>
              <TextComponent size={FontSize.xxxl} color={Colors.error}>
                {t("extra.noresult")}
              </TextComponent>
            </View>
          )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Buckets);

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
    paddingHorizontal: Constants.statusBarHeight / 3,
  },
});
