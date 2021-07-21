import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Product from "./Product";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem({ item, index }) {
    return <Product data={item} key={index} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.products}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
});
