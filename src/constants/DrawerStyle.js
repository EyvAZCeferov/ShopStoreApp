import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import Constants from "expo-constants";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Foundation,
  Ionicons,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ProgramLockContext } from "../../../functions/Hooks/Authentication/Lock/ProgramLockContext";
// import { get_image } from "../../../functions/standart/helper";
const icon = require("../../assets/icon.png");
import { t } from "../functions/lang";

const { width, height } = Dimensions.get("window");
import TextComponent from "../constants/TextComponent";
import axios from "axios";
import { Colors } from "./Theme";

export default function DrawerStyle(props) {
  //   const contextType = React.useContext(ProgramLockContext);

  //   function navigationreset() {
  //     const { program, setProgram } = contextType;
  //     setProgram(false);
  //   }

  return (
    <View>
      <StatusBar backgroundColor="#fff" batStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.oneElement}
          onPress={() => props.navigation.navigate("Home")}
        >
          <View>
            <AntDesign
              name="home"
              size={24}
              style={{ fontWeight: "bold", textAlign: "right" }}
              color={Colors.primary1}
            />
          </View>
          <View>
            <TextComponent style={styles.texts}>
              {t("drawer.home")}
            </TextComponent>
          </View>
          <View />
        </TouchableOpacity>
        <View style={styles.seperator} />

        <TouchableOpacity
          style={styles.oneElement}
          onPress={() => props.navigation.navigate("Maps")}
        >
          <View>
            <Feather name="map-pin" size={24} color={Colors.primary1} />
          </View>
          <View>
            <TextComponent style={styles.texts}>
              {t("drawer.map")}
            </TextComponent>
          </View>
          <View />
        </TouchableOpacity>
        <View style={styles.seperator} />
        {/* <TouchableOpacity
          style={styles.oneElement}
          onPress={() => props.navigation.navigate("History")}
        >
          <View>
            <MaterialIcons name="history" size={24} color={Colors.primary1} />
          </View>
          <View>
            <TextComponent style={styles.texts}>
              {t("drawer.history")}
            </TextComponent>
          </View>
          <View />
        </TouchableOpacity>
        <View style={styles.seperator} /> */}
        <TouchableOpacity
          style={styles.oneElement}
          onPress={() => props.navigation.navigate("Contactus")}
        >
          <View>
            <AntDesign name="contacts" size={24} color={Colors.primary1} />
          </View>
          <View>
            <TextComponent style={styles.texts}>
              {t("drawer.contactus")}
            </TextComponent>
          </View>
          <View />
        </TouchableOpacity>
        <View style={styles.seperator} />
        <TouchableOpacity
          style={styles.oneElement}
          onPress={() => props.navigation.navigate("Settings")}
        >
          <View>
            <AntDesign
              name="setting"
              size={24}
              style={{ fontWeight: "bold" }}
              color={Colors.primary1}
            />
          </View>
          <View>
            <TextComponent style={styles.texts}>
              {t("drawer.settings")}
            </TextComponent>
          </View>
          <View />
        </TouchableOpacity>
        <View style={styles.seperator} />
        <TouchableOpacity
          style={styles.oneElement}
          onPress={async () => {
            await axios.post("/auth/logout").then(async (e) => {
              AsyncStorage.removeItem("token");
              navigationreset();
            });
          }}
        >
          <View>
            <AntDesign
              name="logout"
              size={24}
              style={{ fontWeight: "bold" }}
              color={Colors.primary1}
            />
          </View>
          <View>
            <TextComponent style={styles.texts}>
              {t("drawer.logout")}
            </TextComponent>
          </View>
          <View />
        </TouchableOpacity>
        <View style={styles.seperator} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    flexWrap: "wrap",
  },
  oneElement: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "left",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    paddingLeft: Constants.statusBarHeight,
  },
  seperator: {
    width: "100%",
    marginVertical: 5,
    borderBottomColor: Colors.primary1,
    borderBottomWidth: 1,
  },
  texts: {
    fontSize: 16,
    color: Colors.primary1,
    fontFamily: "RobotoMono_bold",
    textAlign: "left",
    width: width / 2,
    height: 35,
    paddingTop: 6,
    paddingLeft: Constants.statusBarHeight,
  },
});
