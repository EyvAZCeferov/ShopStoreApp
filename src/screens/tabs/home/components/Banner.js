import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Colors, Styles, FontSize } from "../../../../constants/Theme";
import TextComponent from "../../../../constants/TextComponent";
const { width } = Dimensions.get("window");
import { AntDesign } from "@expo/vector-icons";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  renderItem({ item, index }) {
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          source={{ uri: item.image }}
          style={{
            width,
            height: "100%",
          }}
          resizeMethod="auto"
          resizeMode="cover"
        />
        <TouchableOpacity
          style={[Styles.shadow, styles.leftButton, Styles.center]}
          onPress={() => this.scrollToIndex("eks", index)}
        >
          <AntDesign name="left" size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.shadow, styles.rightButton, Styles.center]}
          onPress={() => this.scrollToIndex("art", index)}
        >
          <AntDesign name="right" size={18} color="white" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  scrollToIndex = (type, index) => {
    if (type == "art") {
      var randomIndex =
        this.state.index < this.props.banners.length - 1
          ? this.state.index + 1
          : 0;

      this.flatListRef.scrollToIndex({
        animated: true,
        index: randomIndex,
      });
      this.setState({
        index: randomIndex,
      });
    } else if (type == "eks") {
      var randomIndex =
        this.state.index >= this.props.banners.length - 1
          ? this.state.index - 1
          : 0;
      this.flatListRef.scrollToIndex({
        animated: true,
        index: randomIndex,
      });
      this.setState({
        index: randomIndex,
      });
    }
  };

  scrollToItem = () => {
    let randomIndex = Math.floor(
      Math.random(Date.now()) * this.props.banners.length
    );
    this.flatListRef.scrollToIndex({ animated: true, index: "" + randomIndex });
    this.setState({
      index: randomIndex,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.banners}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem.bind(this)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            width,
            height: "100%",
          }}
          scrollEnabled={true}
          scrollEventThrottle={60}
          ref={(ref) => {
            this.flatListRef = ref;
          }}
          onEndReachedThreshold={0.5}
          numColumns={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  leftButton: {
    position: "absolute",
    top: "45%",
    left: "2%",
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: Colors.primary1,
  },
  rightButton: {
    position: "absolute",
    top: "45%",
    right: "2%",
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: Colors.primary1,
  },
});
