import { CommonActions } from "@react-navigation/native";

export default function reset(props) {
  return props.navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        { name: "Home" },
        {
          name: "Home",
        },
      ],
    })
  );
}
