import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import TextComponent from "../../../../constants/TextComponent";
import { Styles, Colors, FontSize } from "../../../../constants/Theme";
import { t } from "../../../../functions/lang";
const { width } = Dimensions.get("window");

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem({ item, index }) {
    return (
      <TouchableOpacity
        key={index}
        style={[
          Styles.center,
          {
            width: this.props.hide ? 70 : 115,
            height: this.props.hide ? 70 : 180,
            marginRight: 15,
            marginTop: 12,
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 90,
            backgroundColor:
              index == this.props.active ? Colors.primary2 : "transparent",
          },
        ]}
      >
        <View
          style={[
            Styles.center,
            {
              width: 80,
              height: 80,
              borderWidth: this.props.hide ? 0 : 2,
              borderColor: this.props.hide ? "transparent" : Colors.white,
              borderRadius: 50,
              marginBottom: 10,
            },
          ]}
        >
          {item.icon}
        </View>
        {this.props.hide ? null : (
          <TextComponent color={Colors.white} size={FontSize.xs}>
            {item.name}
          </TextComponent>
        )}
        {this.props.hide ? null : (
          <TextComponent
            color={Colors.white}
            size={FontSize.xxl / 2}
            style={{
              marginTop: 5,
            }}
          >
            {item.itemCount} {t("descriptions.catcount")}
          </TextComponent>
        )}
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.categories}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    maxHeight: 200,
    minHeight: 80,
  },
});
