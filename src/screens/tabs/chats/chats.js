import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import { Colors, FontSize, Styles } from "../../../constants/Theme";
import { Feather } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
import TextComponent from "../../../constants/TextComponent";
import Constants from "expo-constants";

export default function Chats(props) {
  const [messages, setMessages] = useState([]);
  const [offerVisible, setOfferVisible] = useState(false);
  const [offers, setOffers] = useState([]);
  const products = [
    {
      id: 1,
      name: "Iphone 11 128GB",
      price: 1819.0,
      images: [
        "https://demo.shopstore.az/image/cache/catalog/Phones/Apple/iphone-11-128gb-500x600.png",
        "https://demo.shopstore.az/image/cache/catalog/11%20black%202-570x684.jpg",
        "https://demo.shopstore.az/image/cache/catalog/11%20black%203-570x684.jpg",
      ],
    },
    {
      id: 2,
      name: "iPhone 11 Pro 256 GB",
      price: 2549.99,
      images: [
        "https://demo.shopstore.az/image/cache/catalog/iphone-11-pro-max-64-gb-500x600.jpg",
        "https://demo.shopstore.az/image/cache/catalog/11%20gold%204-570x684.jpg",
        "https://demo.shopstore.az/image/cache/catalog/gold%2011%202-570x684.jpg",
      ],
    },
    {
      id: 3,
      name: "Alcatel Tab 1T 7.0-inch 32GB",
      price: 209.0,
      images: [
        "https://demo.shopstore.az/image/cache/catalog/Plansets/Alcatel/alcatel_alcatel1T7_component_mobile_1-500x600.png",
        "https://demo.shopstore.az/image/cache/catalog/Plansets/Alcatel/download-570x684.png",
      ],
    },
    {
      id: 4,
      name: "Apple Airpods 2 MV7N2",
      price: 339.99,
      images: [
        "https://demo.shopstore.az/image/cache/catalog/apple-airpods-2-mv7n2-500x600.jpg",
        "https://demo.shopstore.az/image/cache/catalog/iKlinikstores-Product-AirPods-BG-2-570x684.jpg",
        "https://demo.shopstore.az/image/cache/catalog/iKlinikstores-Product-AirPods-BG-570x684.jpg",
        "https://demo.shopstore.az/image/cache/catalog/0039175_4-570x684.png",
      ],
    },
    {
      id: 5,
      name: "Apple Pencil üçün Dəri Keys, (MPQL2)",
      price: 80.0,
      images: [
        "https://demo.shopstore.az/image/cache/catalog/skin-keys-for-apple-pencil-mpql2-500x600.jpg",
        "https://demo.shopstore.az/image/cache/catalog/apple-pencil-case-taupe-2.1000x1000-570x684.jpg",
      ],
    },
  ];

  useEffect(() => {
    if (props.route.params != null) {
      var item = props.route.params.data;
      setMessages([
        {
          _id: messages.length + 1,
          text: "Ad : " + item.name + "\nQiymət : " + item.price + " AZN",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "Eyvaz Ceferov",
            avatar: "https://placeimg.com/140/140/tech",
          },
        },
      ]);
    } else {
      setMessages([
        {
          _id: 1,
          text: "Salam necə kömək edə bilərik?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/tech",
          },
        },
      ]);
    }
    inputchanged();
  }, [props]);

  function inputchanged(val = null) {
    if (val != null && val != "" && val != " ") {
      var found = products.find((element) => element.name.includes(val));
      if (found != null || found != undefined) {
        setOfferVisible(true);
        setOffers([found]);
      } else {
        setOfferVisible(false);
        setOffers(null);
      }
    } else {
      setOffers(null);
      setOfferVisible(false);
    }
  }

  // useLayoutEffect(() => {
  //   const unsubscribe = db
  //     .collection("chats")
  //     .orderBy("createdAt", "desc")
  //     .onSnapshot((snapshot) =>
  //       setMessages(
  //         snapshot.docs.map((doc) => ({
  //           _id: doc.data()._id,
  //           createdAt: doc.data().createdAt.toDate(),
  //           text: doc.data().text,
  //           user: doc.data().user,
  //         }))
  //       )
  //     );
  //   return unsubscribe;
  // }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user } = messages[0];
  }, []);

  const renderSend = (sendProps) => {
    return (
      <TouchableOpacity
        onPress={() =>
          onSend([
            {
              _id: messages.length + 1,
              createdAt: new Date(),
              text: sendProps.text,
              user: {
                _id: 1,
                name: "React Native",
                avatar: "https://placeimg.com/140/140/tech",
              },
            },
          ])
        }
        style={[
          Styles.center,
          {
            marginRight: 5,
            width: 75,
            backgroundColor: Colors.primary2,
            height: "100%",
          },
        ]}
      >
        <Feather name="send" size={24} color={Colors.white} />
      </TouchableOpacity>
    );
  };

  function renderItem({ item, index }) {
    return (
      <TouchableOpacity
        key={index}
        style={[
          Styles.center,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            width: width,
            height: "100%",
            backgroundColor: Colors.white,
            zIndex: 9999,
          },
        ]}
        onPress={() =>
          onSend([
            {
              _id: messages.length + 1,
              createdAt: new Date(),
              text: "Ad : " + item.name + "\nQiymet : " + item.price + " AZN",
              user: {
                _id: 1,
                name: "React Native",
                avatar: "https://placeimg.com/140/140/tech",
              },
            },
          ])
        }
      >
        <View style={{ width: 110, height: 110 }}>
          <Image
            source={{ uri: item.images[0] }}
            style={{
              width: "100%",
              height: "100%",
            }}
            resizeMethod="auto"
            resizeMode="contain"
          />
        </View>
        <View>
          <TextComponent color={Colors.black} size={FontSize.s}>
            {item.name}
          </TextComponent>
          <TextComponent color={Colors.primary1} size={FontSize.xxl}>
            {item.price} AZN
          </TextComponent>
        </View>
        <View style={{ width: width / 3 }} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        showAvatarForEveryMessage={true}
        infiniteScroll={true}
        locale="az"
        isTyping={false}
        messagesContainerStyle={{
          backgroundColor: Colors.white,
        }}
        dateFormat="ll"
        renderSend={renderSend}
        onInputTextChanged={inputchanged}
      />

      {offerVisible ? (
        <View
          style={{
            width: width,
            height: width - 200,
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            zIndex: 999,
          }}
        >
          <FlatList
            data={offers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    color: Colors.primary1,
    position: "relative",
  },
});
