import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";

const { width } = Dimensions.get("window");
import { FontAwesome5 } from "@expo/vector-icons";
import TextComponent from "../../../../constants/TextComponent";
import { t } from "../../../../functions/lang";
import { Colors } from "../../../../constants/Theme";

export default function NumberButtons(props) {
  function changeVal(e) {
    props.changeVal(e);
  }

  function clearVal() {
    props.clearVal();
  }

  function RenderButtons() {
    return (
      <Grid style={styles.grid}>
        <Row style={styles.alignCenter}>
          <Grid style={styles.alignCenter}>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(1)}
              >
                <TextComponent style={styles.btnText}>1</TextComponent>
              </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(2)}
              >
                <TextComponent style={styles.btnText} children="2" />
              </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(3)}
              >
                <TextComponent style={styles.btnText} children="3" />
              </TouchableOpacity>
            </Col>
          </Grid>
        </Row>
        <Row style={styles.alignCenter}>
          <Grid style={styles.alignCenter}>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(4)}
              >
                <TextComponent style={styles.btnText} children="4" />
              </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(5)}
              >
                <TextComponent style={styles.btnText} children={5} />
              </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(6)}
              >
                <TextComponent style={styles.btnText} children={6} />
              </TouchableOpacity>
            </Col>
          </Grid>
        </Row>
        <Row style={styles.alignCenter}>
          <Grid style={styles.alignCenter}>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(7)}
              >
                <TextComponent style={styles.btnText} children={7} />
              </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(8)}
              >
                <TextComponent style={styles.btnText} children={8} />
              </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(9)}
              >
                <TextComponent style={styles.btnText} children={9} />
              </TouchableOpacity>
            </Col>
          </Grid>
        </Row>
        <Row style={styles.alignCenter}>
          <Grid style={styles.alignCenter}>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  styles.btnPress,
                  {
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  },
                ]}
                onPress={() => BackHandler.exitApp()}
              >
                <TextComponent
                  style={[styles.btnText, styles.cancText]}
                  children={t("buttons.cancel")}
                />
              </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[styles.btn, styles.btnPress]}
                onPress={() => changeVal(0)}
              >
                <TextComponent style={styles.btnText} children={0} />
              </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  styles.btnPress,
                  {
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  },
                ]}
                onPress={() => clearVal()}
              >
                <FontAwesome5 name="times" size={24} color={Colors.primary1} />
              </TouchableOpacity>
            </Col>
          </Grid>
        </Row>
      </Grid>
    );
  }

  return <View style={styles.container}>{RenderButtons()}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  grid: {
    width: width - 45,
    height: "50%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fff",
  },
  btnPress: {
    borderRadius: 35,
    borderColor: Colors.primary1,
    borderWidth: 2,
  },
  btnText: {
    fontSize: 36,
    fontWeight: "400",
    color: Colors.primary1,
  },
  cancText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  alignCenter: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
