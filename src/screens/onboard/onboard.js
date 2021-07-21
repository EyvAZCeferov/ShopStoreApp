import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextComponent from "../../constants/TextComponent";
import { Colors, FontSize, Styles } from "../../constants/Theme";
const { width, height } = Dimensions.get("screen");

export default class OnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          id: 1,
          name: "Basliq is here",
          image: require("../../../assets/adaptive-icon.png"),
          desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects",
        },
        {
            id: 2,
            name: "Basliq is here 2",
            image: require("../../../assets/icon.png"),
            desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects",
          },
      ],
    };
  }

  async _onDone() {
    await AsyncStorage.setItem("@onboarding", "Ok");
    this.props.getnewCall();
  }

  _renderNextButton() {
    return (
      <View style={styles.button}>
        <AntDesign
          style={styles.buttonIcon}
          name="right"
          size={24}
          color={Colors.white}
        />
      </View>
    );
  }

  _renderDoneButton() {
    return (
      <View style={[styles.button, { backgroundColor: Colors.primary1 }]}>
        <AntDesign
          style={styles.buttonIcon}
          name="check"
          size={24}
          color={Colors.white}
        />
      </View>
    );
  }

  _renderItem({ item }) {
    return (
      <View style={styles.slide} key={item.id}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.slideContent}>
          <TextComponent
            style={styles.title}
            family="RobotoMono_bold"
            children={item.name}
          />
          <TextComponent style={styles.desc} children={item.description} />
        </View>
      </View>
    );
  }

  renderContent() {
    if (this.state.slides != null) {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={this.state.slides}
          onDone={() => this._onDone()}
          bottomButton={true}
          dotStyle={{
            backgroundColor: Colors.black,
            width: 10,
            height: 10,
          }}
          activeDotStyle={{
            backgroundColor: Colors.primary1,
            width: 20,
            height: 10,
          }}
          dotClickEnabled={true}
          showNextButton={true}
          showPrevButton={false}
          showDoneButton={true}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    } else {
      return (
        <View style={[styles.container, Styles.center]}>
          <ActivityIndicator size="large" color={Colors.primary1} />
        </View>
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
        {this.renderContent()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: width / 20,
  },
  buttonIcon: {
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    padding: FontSize.s,
  },
  buttonText: {
    color: Colors.primary1,
    fontSize: FontSize.l,
    fontWeight: "bold",
    textAlign: "left",
  },
  slide: {
    flex: 1,
    justifyContent: "space-around",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: 300,
    height: 300,
    flex: 0.5,
  },
  slideContent: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "transparent",
    padding: 10,
    paddingTop: 0,
    flex: 0.5,
  },
  title: {
    color: Colors.primary1,
    fontSize: FontSize.s * 2,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
  },
  desc: {
    color: "rgba(0,0,0,.4)",
    fontSize: FontSize.m,
    marginTop: FontSize.s,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
