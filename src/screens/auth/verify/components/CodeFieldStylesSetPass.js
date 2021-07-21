import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../../constants/Theme";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
export const CELL_SIZE = 50;
export const CELL_BORDER_RADIUS = 0;
export const DEFAULT_CELL_BG_COLOR = "transparent";
export const NOT_EMPTY_CELL_BG_COLOR = Colors.green1HEX;
export const ACTIVE_CELL_BG_COLOR = "transparent";

const styles = StyleSheet.create({
  codeareaSetPas: {
    height: 60,
    width: width,
  },
  codeFieldRoot: {
    height: CELL_SIZE,
    marginVertical: 0,
    paddingHorizontal: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  cell: {
    marginHorizontal: 15,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE,
    fontSize: 35,
    backgroundColor: "transparent",
    textAlign: "center",
    color: Colors.primary2,
    borderColor: "transparent",
    borderBottomColor: "rgba(0,0,0,.5)",
    borderBottomWidth: 1.54,
    borderRadius: 0,

    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  root: {
    height: height,
  },
});

export default styles;
