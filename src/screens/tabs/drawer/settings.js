import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Theme";
import Header from "./components/header";
import { t } from "../../../functions/lang";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header name={t("drawer.settings")} {...this.props} />
        </View>
        <View style={styles.content}>

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
  },
  content: {
    flex: 0.9,
  },
});
