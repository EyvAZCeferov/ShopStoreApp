import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
import Header from "./components/header";
import { t } from "../../../functions/lang";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import TextComponent from "../../../constants/TextComponent";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width } = Dimensions.get("window");

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modaltext: null,
      modalSelect: null,
      langs: [
        {
          name: "Azərbaycan",
          key: "az",
          icon: "https://cdn.britannica.com/14/4714-004-959E7B43/Flag-Azerbaijan.jpg",
        },
        {
          name: "Rus",
          key: "ru",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png",
        },
        {
          name: "English",
          key: "en",
          icon: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
        },
      ],
      lang: null,
    };
  }

  async gLang() {
    let lang = await AsyncStorage.getItem("@language");
    this.setState({
      lang,
    });
  }

  componentDidMount() {
    this.gLang();
  }

  async selectLang(lang) {
    await AsyncStorage.setItem("@language", lang);
    this.modalState(false, null, null);
    this.gLang();
  }

  renderItem({ item, index }) {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.selectLang(item.key)}
        style={[
          Styles.center,
          {
            width: width / 2.2,
            height: width / 2.2,
            marginRight: 8,
            marginBottom: 8,
            borderRadius: 8,
            backgroundColor:
              item.key == this.state.lang ? Colors.primary2 : Colors.primary1,
            flexDirection: "column",
            justifyContent: "space-between",
          },
        ]}
      >
        <Image
          source={{ uri: item.icon }}
          style={{
            width: "100%",
            height: "80%",
          }}
        />
        <TextComponent color={Colors.white} size={FontSize.xl}>
          {item.name}
        </TextComponent>
      </TouchableOpacity>
    );
  }

  modalState(visible, text, type) {
    this.setState({
      modalVisible: visible,
      modaltext: text,
      modalSelect: type,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header name={t("drawer.settings")} {...this.props} />
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            style={[Styles.center, styles.listitem]}
            onPress={() =>
              this.modalState(true, t("settings.selectlang"), "lang")
            }
          >
            <TouchableOpacity style={[Styles.center, { width: 26 }]}>
              <Entypo name="language" size={26} color="black" />
            </TouchableOpacity>
            <View
              style={{
                width: width - 4.5 * Constants.statusBarHeight,
                marginLeft: Constants.statusBarHeight,
              }}
            >
              <TextComponent color={Colors.black} size={FontSize.l}>
                {t("settings.lang")}
              </TextComponent>
            </View>
            <TouchableOpacity
              style={[Styles.center, { width: 26 }]}
              onPress={() =>
                this.modalState(true, t("settings.selectlang"), "lang")
              }
            >
              <AntDesign name="arrowright" size={26} color="black" />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.center, styles.listitem]}
            onPress={() =>
              this.props.navigation.navigate("SetPass", {
                prevpage: "Settings",
              })
            }
          >
            <TouchableOpacity style={[Styles.center, { width: 26 }]}>
              <Entypo name="lock" size={26} color="black" />
            </TouchableOpacity>
            <View
              style={{
                width: width - 4.5 * Constants.statusBarHeight,
                marginLeft: Constants.statusBarHeight,
              }}
            >
              <TextComponent color={Colors.black} size={FontSize.l}>
                {t("settings.setpass")}
              </TextComponent>
            </View>
            <TouchableOpacity
              style={[Styles.center, { width: 26 }]}
              onPress={() =>
                this.props.navigation.navigate("SetPass", {
                  prevpage: "Settings",
                })
              }
            >
              <AntDesign name="arrowright" size={26} color="black" />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.center, styles.listitem]}
            onPress={() =>
              this.props.navigation.navigate("SetFinger", {
                prevpage: "Settings",
              })
            }
          >
            <TouchableOpacity style={[Styles.center, { width: 26 }]}>
              <Ionicons name="finger-print-sharp" size={26} color="black" />
            </TouchableOpacity>
            <View
              style={{
                width: width - 4.5 * Constants.statusBarHeight,
                marginLeft: Constants.statusBarHeight,
              }}
            >
              <TextComponent color={Colors.black} size={FontSize.l}>
                {t("settings.setfinger")}
              </TextComponent>
            </View>
            <TouchableOpacity
              style={[Styles.center, { width: 26 }]}
              onPress={() =>
                this.props.navigation.navigate("SetFinger", {
                  prevpage: "Settings",
                })
              }
            >
              <AntDesign name="arrowright" size={26} color="black" />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.center, styles.listitem]}
            onPress={() =>
              this.props.navigation.navigate("SetFace", {
                prevpage: "Settings",
              })
            }
          >
            <TouchableOpacity style={[Styles.center, { width: 26 }]}>
              <MaterialCommunityIcons
                name="face-recognition"
                size={26}
                color="black"
              />
            </TouchableOpacity>
            <View
              style={{
                width: width - 4.5 * Constants.statusBarHeight,
                marginLeft: Constants.statusBarHeight,
              }}
            >
              <TextComponent color={Colors.black} size={FontSize.l}>
                {t("settings.setface")}
              </TextComponent>
            </View>
            <TouchableOpacity
              style={[Styles.center, { width: 26 }]}
              onPress={() =>
                this.props.navigation.navigate("SetFace", {
                  prevpage: "Settings",
                })
              }
            >
              <AntDesign name="arrowright" size={26} color="black" />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.center, styles.listitem]}
            onPress={() =>
              this.modalState(true, t("settings.termofuse"), "termofuse")
            }
          >
            <TouchableOpacity style={[Styles.center, { width: 26 }]}>
              <Entypo name="documents" size={26} color="black" />
            </TouchableOpacity>
            <View
              style={{
                width: width - 4.5 * Constants.statusBarHeight,
                marginLeft: Constants.statusBarHeight,
              }}
            >
              <TextComponent color={Colors.black} size={FontSize.l}>
                {t("settings.termofuse")}
              </TextComponent>
            </View>
            <TouchableOpacity
              style={[Styles.center, { width: 26 }]}
              onPress={() =>
                this.modalState(true, t("settings.termofuse"), "termofuse")
              }
            >
              <AntDesign name="arrowright" size={26} color="black" />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.center, styles.listitem]}
            onPress={() => alert("Çıxış")}
          >
            <TouchableOpacity style={[Styles.center, { width: 26 }]}>
              <AntDesign name="logout" size={26} color="black" />
            </TouchableOpacity>
            <View
              style={{
                width: width - 4.5 * Constants.statusBarHeight,
                marginLeft: Constants.statusBarHeight,
              }}
            >
              <TextComponent color={Colors.black} size={FontSize.l}>
                {t("drawer.logout")}
              </TextComponent>
            </View>
            <TouchableOpacity
              style={[Styles.center, { width: 26 }]}
            ></TouchableOpacity>
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.state.modalVisible}
          style={[Styles.center, { flex: 1 }]}
        >
          <View
            style={[
              {
                flex: 0.2,
                flexDirection: "row",
                justifyContent: "space-around",
              },
              Styles.center,
            ]}
          >
            <TextComponent color={Colors.black} size={FontSize.xxxl}>
              {this.state.modaltext}
            </TextComponent>
            {this.state.modalSelect == "termofuse" ? (
              <TouchableOpacity
                style={[
                  Styles.center,
                  {
                    width: 40,
                    height: 40,
                    backgroundColor: Colors.error,
                    marginLeft: Constants.statusBarHeight,
                  },
                ]}
                onPress={() => this.modalState(false, null, null)}
              >
                <FontAwesome5 name="times" size={24} color="white" />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={[{ flex: 0.8 }, Styles.center]}>
            {this.state.modalSelect == "lang" ? (
              <FlatList
                data={this.state.langs}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem.bind(this)}
                numColumns={2}
                style={{ paddingHorizontal: 10 }}
              />
            ) : (
              <ScrollView style={{ paddingHorizontal: 10 }}>
                <TextComponent color={Colors.black} size={FontSize.s}>
                  Donec ullamcorper facilisis tincidunt. Quisque vestibulum
                  sapien sed tristique vehicula. Aliquam volutpat nibh et ligula
                  porttitor sollicitudin. Nullam ut tempor leo. Sed tristique
                  diam sem, vel dignissim sem porttitor vel. Phasellus quis
                  luctus orci. Nam commodo, est in fringilla aliquet, libero
                  elit tincidunt massa, vel iaculis magna tellus quis odio. Ut
                  tempor posuere sem. Nullam placerat, ipsum et aliquet euismod,
                  metus urna tempor libero, ut dictum dui odio sit amet massa.
                  Mauris ultrices neque ultricies, tristique lacus in, molestie
                  erat. Vivamus pharetra mauris vel turpis sagittis fermentum.
                  Duis sed mi eu dolor iaculis varius ac at quam. In sit amet
                  urna tincidunt, suscipit felis nec, lobortis magna. Quisque
                  eleifend iaculis nulla a dapibus. Pellentesque arcu eros,
                  sagittis eget iaculis ut, congue vitae mauris. Proin fringilla
                  egestas diam, sed suscipit orci vulputate a. Sed mattis id
                  odio nec placerat. Praesent commodo diam ex, eu commodo leo
                  tempus eu. Suspendisse at dignissim lectus. In cursus nisi
                  enim, sit amet vehicula dolor laoreet consequat. Nulla
                  pharetra quam odio, id vestibulum ante porttitor at. Sed
                  eleifend elit magna, non egestas lacus fermentum nec. Vivamus
                  a felis eu nulla scelerisque malesuada eu vitae leo. Ut
                  scelerisque nibh risus, maximus bibendum tortor accumsan at.
                  Vestibulum et ante lectus. Sed euismod volutpat nunc, vel
                  semper mi porta et. Suspendisse malesuada quam eget arcu
                  egestas ultricies. Quisque quis neque quam. Nulla
                  sollicitudin, orci sit amet rhoncus viverra, lectus velit
                  dapibus purus, non tempor nisl diam at tortor. Nullam ac
                  ligula ex. Nullam tempor sem nisl, ut aliquet libero interdum
                  non. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Nullam luctus orci eget nisl
                  consectetur, id dapibus nisi mattis. Cras auctor ultricies
                  ante, sit amet dictum sapien rhoncus et. Fusce et sem eget
                  sapien iaculis dapibus a luctus lectus. Pellentesque placerat
                  tempor enim nec cursus. In non arcu mattis, mattis lectus a,
                  molestie mauris. Phasellus eget turpis imperdiet, maximus
                  libero sit amet, fringilla mauris. Nullam dapibus eu magna vel
                  euismod. Donec sit amet metus vitae nisl pulvinar pharetra eu
                  eu elit. Vestibulum vestibulum diam vel turpis consectetur,
                  nec dapibus arcu pulvinar. Phasellus vulputate ornare lacus,
                  non mollis nisi facilisis eu. Donec at posuere erat, eu auctor
                  nunc. Mauris nec sagittis nisl. Duis ac velit eget dolor
                  vulputate auctor. Duis dictum efficitur dolor vel lacinia.
                  Etiam consequat nulla id ante consequat, eget aliquet justo
                  commodo. Fusce porta tortor in odio commodo, in sagittis purus
                  dignissim. Fusce cursus gravida massa sed volutpat.
                </TextComponent>
              </ScrollView>
            )}
          </View>
        </Modal>
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

  listitem: {
    width,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Constants.statusBarHeight,
  },
});
