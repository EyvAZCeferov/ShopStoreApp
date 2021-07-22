import "react-native-gesture-handler";
import * as React from "react";
import { View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
const { width } = Dimensions.get("window");
enableScreens();
console.disableYellowBox = true;
import AsyncStorage from "@react-native-async-storage/async-storage";

// Other Pages
import Splash from "./src/screens/Splash";
import Onboard from "./src/screens/onboard/onboard";

//Auth Stack
import Login from "./src/screens/auth/global/login";
import Register from "./src/screens/auth/global/register";
import Forgetpass from "./src/screens/auth/global/forgetpass";
import SetPass from "./src/screens/auth/verify/setPass";
import SetFinger from "./src/screens/auth/verify/setfinger";
import ProgramLock from "./src/screens/auth/verify/programlock";

// Tabs
import Home from "./src/screens/tabs/home/Home";
import Profile from "./src/screens/tabs/home/Profile";

import Buckets from "./src/screens/tabs/bucket/Buckets";
import Checkout from "./src/screens/tabs/bucket/Checkout";
import OneCheck from "./src/screens/tabs/bucket/OneCheck";

// Drawer
import Map from "./src/screens/tabs/drawer/maps";
import ContactUs from "./src/screens/tabs/drawer/contactus";
import Settings from "./src/screens/tabs/drawer/settings";

import { getLang } from "./src/functions/lang";
import axios from "axios";
import { Colors, TabIcon } from "./src/constants/Theme";
import DrawerStyle from "./src/constants/DrawerStyle";
import Category from "./src/screens/tabs/bucket/Category";
import ProductOne from "./src/screens/tabs/bucket/ProductOne";
import Chats from "./src/screens/tabs/chats/chats";

const GlobalAuthStack = createStackNavigator();
const GlobalAuthStackScreen = () => (
  <GlobalAuthStack.Navigator
    headerMode="none"
    initialRouteName="Login"
    screenOptions={{
      animationEnabled: true,
      animationTypeForReplace: "push",
    }}
  >
    <GlobalAuthStack.Screen name="Login" component={Login} />
    <GlobalAuthStack.Screen name="Register" component={Register} />
    <GlobalAuthStack.Screen name="Forgetpass" component={Forgetpass} />
    <GlobalAuthStackScreen name="SetPass" component={SetPass} />
    <GlobalAuthStackScreen name="SetFinger" component={SetFinger} />
  </GlobalAuthStack.Navigator>
);

const VerifyAuthStack = createStackNavigator();
const VerifyAuthStackScreen = () => (
  <VerifyAuthStack.Navigator
    headerMode="none"
    initialRouteName="ProgramLock"
    screenOptions={{
      animationEnabled: true,
      animationTypeForReplace: "push",
    }}
  >
    <VerifyAuthStack.Screen name="ProgramLock" component={ProgramLock} />
    <VerifyAuthStack.Screen name="Forgetpass" component={Forgetpass} />
  </VerifyAuthStack.Navigator>
);

const TabNavigator = createBottomTabNavigator();
const TabNavigatorScreens = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? TabIcon.homeFOCUSED : TabIcon.home;
          } else if (route.name === "Barcode") {
            iconName = focused ? TabIcon.barcodeFOCUSED : TabIcon.barcode;
          } else if (route.name === "Bucket") {
            iconName = focused ? TabIcon.bucketFOCUSED : TabIcon.bucket;
          } else if (route.name === "Messages") {
            iconName = focused ? TabIcon.messagesFOCUSED : TabIcon.messages;
          } else if (route.name === "Info") {
            iconName = focused ? TabIcon.infoFOCUSED : TabIcon.info;
          }
          return (
            <View
              style={{
                width: 65,
                height: 65,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              {iconName}
            </View>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.primary1,
        activeBackgroundColor: Colors.primary1,
        inactiveBackgroundColor: Colors.primary1,

        inactiveTintColor: "white",
        style: {
          height: 75,
          width: width,
        },
      }}
      initialRouteName="Home"
      detachInactiveScreens={true}
    >
      <TabNavigator.Screen name="Bucket" component={BucketStackScreen} />
      <TabNavigator.Screen name="Home" component={HomeStackScreen} />
      <TabNavigator.Screen name="Messages" component={Chats} />
    </TabNavigator.Navigator>
  );
};

const BucketStack = createStackNavigator();
const BucketStackScreen = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <BucketStack.Navigator
      headerMode="none"
      initialRouteName="Buckets"
      screenOptions={{
        animationEnabled: true,
        animationTypeForReplace: "push",
      }}
    >
      <BucketStack.Screen name="Buckets" component={Buckets} />
      <BucketStack.Screen name="Checkout" component={Checkout} />
      <BucketStack.Screen name="OneCheck" component={OneCheck} />
      <BucketStack.Screen name="Category" component={Category} />
      <BucketStack.Screen name="ProductOne" component={ProductOne} />
    </BucketStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <HomeStack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        animationEnabled: true,
        animationTypeForReplace: "push",
      }}
    >
      <HomeStack.Screen name="Home" component={HomeDrawerScreeens} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
};

const HomeDrawer = createDrawerNavigator();
const HomeDrawerScreeens = (props) => {
  return (
    <HomeDrawer.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        animationEnabled: true,
        animationTypeForReplace: "push",
      }}
      drawerContent={(props) => <DrawerStyle {...props} />}
    >
      <HomeDrawer.Screen name="Home" component={Home} />
      <HomeDrawer.Screen name="Maps" component={Map} />
      <HomeStack.Screen name="Contactus" component={ContactUs} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeDrawer.Navigator>
  );
};

export default function App() {
  const [firstOpenSlider, setfirstOpenSlider] = React.useState(null);
  const [userToken, setUserToken] = React.useState(null);

  async function getfirstOpen() {
    await AsyncStorage.getItem("@onboarding").then((a) => {
      setfirstOpenSlider(a);
    });
  }

  async function getToken() {
    if (await AsyncStorage.getItem("@token")) {
      await AsyncStorage.getItem("@token").then((token) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        setUserToken(token);
      });
    } else {
      setUserToken(null);
    }
  }

  async function getConfig() {
    axios.defaults.baseURL = "https://admin.paygo.az/api/";
    var token = await AsyncStorage.getItem("@token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
  }

  function SwitchProgram(props) {
    const [program, setProgram] = React.useState(true);
    return program ? (
      <TabNavigatorScreens {...props} />
    ) : (
      <VerifyAuthStackScreen {...props} />
    );
  }

  function NavigateAuth(props) {
    return userToken != null ? (
      <SwitchProgram {...props} />
    ) : (
      <GlobalAuthStackScreen {...props} />
    );
  }

  function FirstOpen(props) {
    return firstOpenSlider == null ? (
      <Onboard getnewCall={() => getfirstOpen()} {...props} />
    ) : (
      <NavigateAuth {...props} />
    );
  }

  function SystemOpen(props) {
    const [isready, setisReady] = React.useState(false);
    React.useEffect(() => {
      getLang();
      getfirstOpen();
      getToken();
      getConfig();
      setTimeout(() => {
        setisReady(true);
      }, 1000);
    }, []);
    return isready ? <FirstOpen {...props} /> : <Splash />;
  }

  return (
    <NavigationContainer>
      <SystemOpen />
    </NavigationContainer>
  );
}
