import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { t } from "../../../functions/lang";
import Constants from "expo-constants";
import TextComponent from "../../../constants/TextComponent";
const { width } = Dimensions.get("window");

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  renderImage() {
    return (
      <Image
        style={styles.image}
        source={{
          uri: "https://bloximages.chicago2.vip.townnews.com/siouxcityjournal.com/content/tncms/assets/v3/editorial/5/a7/5a76c2b8-c649-5051-bbe6-c77e0de51b6f/5afcb13e16e00.image.jpg",
        }}
      />
    );
  }

  _pickImage = async () => {
    try {
      const options = {
        maxWidth: 2000,
        maxHeight: 2000,
        storageOptions: {
          skipBackup: true,
        },
      };

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.7,
        base64: false,
        options: options,
      });

      if (result.cancelled) {
        return false;
      }

      this.setState({ isReady: false });
      const response = await fetch(result.uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref("users")
        .child("/user_" + this.state.user.uid + ".png");
      ref.put(blob).on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (data) => {},
        () => {
          firebase
            .storage()
            .ref("users/user_" + this.state.user.uid + ".png")
            .snapshot.ref.getDownloadURL()
            .then(function (downloadURL) {
              downpp = downloadURL;
              this.setState({ isReady: false });
            });
        }
      );

      ref.getDownloadURL().then(async (url) => {
        this.setState({ isReady: false });
        var formData = new FormData();
        formData.append("image", url);
        await axios.post("auth/update_photo", formData).then((e) => {
          this.getInfo();
        });
      });
      this.setState({ isReady: false });
      this.getInfo();
    } catch (e) {
      console.log(e.message);
    }
    this.setState({ isReady: true });
  };

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
            {t("titles.account")}
          </TextComponent>
          <View />
        </View>

        <View style={styles.content}>
          <View
            style={[
              Styles.center,
              ,
              { flex: 0.3, backgroundColor: Colors.primary1 },
            ]}
          >
            <View style={styles.imagePickerArena}>
              <View style={styles.imageArena}>
                <Image
                  style={styles.image}
                  source={require("../../../../assets/adaptive-icon.png")}
                />
              </View>
              <View style={styles.pickerArena}>
                <TouchableOpacity
                  style={{ padding: 10, marginLeft: 10 }}
                  danger
                  rounded
                  small
                  onPress={this._pickImage}
                >
                  <Feather name="edit" size={24} color={Colors.primary1} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ flex: 0.5, marginTop: Constants.statusBarHeight }}>
            <View
              style={[
                Styles.center,
                {
                  flexDirection: "column",
                  justifyContent: "space-around",
                },
              ]}
            >
              <View style={[Styles.center, styles.inputArena]}>
                <TouchableOpacity
                  style={[styles.inputIconButton, Styles.center]}
                >
                  <Feather name="mail" size={24} color="black" />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder={t("form.email")} />
              </View>

              <View style={{ marginVertical: 3 }} />

              <View style={[Styles.center, styles.inputArena]}>
                <TouchableOpacity
                  style={[styles.inputIconButton, Styles.center]}
                >
                  <MaterialCommunityIcons
                    name="form-textbox-password"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder={"Əvvəlki şifrə"} />
              </View>

              <View style={{ marginVertical: 3 }} />

              <View style={[Styles.center, styles.inputArena]}>
                <TouchableOpacity
                  style={[styles.inputIconButton, Styles.center]}
                >
                  <MaterialCommunityIcons
                    name="form-textbox-password"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder={"Yeni şifrə"} />
              </View>

              <View style={{ marginVertical: 3 }} />

              <View style={[Styles.center, styles.inputArena]}>
                <TouchableOpacity
                  style={[styles.inputIconButton, Styles.center]}
                >
                  <MaterialCommunityIcons
                    name="form-textbox-password"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  placeholder={"Yeni şifrənin təkrarı"}
                />
              </View>
            </View>
          </View>

          <View style={{ flex: 0.1 }}>
            <View
              style={[
                Styles.center,
                {
                  flex: 1,
                },
              ]}
            >
              <TouchableOpacity
                style={[Styles.center, styles.button]}
                onPress={() => this.props.navigation.navigate("OneCheck")}
              >
                <TextComponent color={Colors.white} size={FontSize.xl}>
                  {t("buttons.submit")}
                </TextComponent>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 0.1 }} />
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
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    flex: 0.9,
  },

  imagePickerArena: {
    position: "relative",
    width: 120,
    height: 120,
    backgroundColor: Colors.white,
    borderRadius: 60,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: -5,
    marginBottom: 10,
  },
  imageArena: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "transparent",
  },
  pickerArena: {
    position: "absolute",
    bottom: 0,
    right: 11,
    backgroundColor: "transparent",
  },

  inputArena: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputIconButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary2,
  },
  input: {
    width: width - 70,
    height: "100%",
    borderBottomColor: Colors.primary2,
    borderBottomWidth: 2,
    paddingLeft: 11,
    fontSize: FontSize.m,
    fontFamily: "RobotoMono_medium",
  },

  button: {
    width: width / 1.25,
    height: 50,
    backgroundColor: Colors.primary2,
    borderRadius: 15,
  },
});
