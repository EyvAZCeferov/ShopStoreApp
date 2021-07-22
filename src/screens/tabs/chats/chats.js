import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Colors } from "../../../constants/Theme";

export default function Chats() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
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
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user } = messages[0];
    console.log(_id);
  }, []);

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
        actionSheet={true}
        infiniteScroll={true}
        locale="az"
        isTyping={false}
        messagesContainerStyle={{
          backgroundColor: Colors.white,
        }}
        dateFormat="ll"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
