import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  
} from "react-native";
import { t } from "../../../functions/lang";
import MapView, { Callout, Marker } from "react-native-maps";
import TextComponent from "../../../constants/TextComponent";
const { width } = Dimensions.get("window");
import { mapStyle } from "./components/mapstyle";
import { Colors, FontSize } from "../../../constants/Theme";
import * as Location from "expo-location";
import SnBar from "../../../constants/SnBAR";
import Header from "./components/header";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: null,
      markers: [
        {
          id: 1,
          name: "Tərlan Əliyarbəyov 9A (Fəvvarələr meydanı)",
          coords: {
            latitude: "40.3711149",
            longitude: "49.8345093",
          },
        },
        {
          id: 2,
          name: "28 May M/st Puşkin 12/14",
          coords: {
            latitude: "40.3810566",
            longitude: "49.8468167",
          },
        },
      ],
      markerCount: 2,
      refresh: true,
      visible: false,
      snackBarMessage: null,
      snackBarStyle: null,
      mapViewDirection: null,
    };
  }

  async getPerm() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      this.setState({
        visible: true,
        snackBarMessage: t("snackbar.notPermitted"),
        snackBarStyle: "error",
      });
      setTimeout(() => {
        this.setState({ visible: false });
      }, 1500);
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ coords: location.coords, refresh: false });
  }

  componentDidMount() {
    this.getPerm();
  }

  renderMarker({ item, index }) {
    return (
      <Marker
        key={index}
        title={item.name}
        coordinate={{
          latitude: parseFloat(item.coords.latitude),
          longitude: parseFloat(item.coords.longitude),
        }}
        onPress={() => this.toLoc(item.coords)}
      >
        <Callout>
          <TouchableOpacity>
            <TextComponent
              style={{
                color: Colors.primary2,
                fontSize: FontSize.s,
                marginTop: 2,
              }}
            >
              {item.name}
            </TextComponent>
          </TouchableOpacity>
        </Callout>
      </Marker>
    );
  }

  search(key) {
    if (key != null) {
      var datas = [];
      this.state.markers.map((e) => {
        var markername = langConvert(e.name, "name");
        var res = markername.match(`${key}`);
        if (res) {
          datas.push(e);
        }
      });
      if (datas.length == 0) {
        this.getPerm();
      } else {
        this.setState({
          markers: datas,
        });
      }
    } else {
      this.getPerm();
    }
  }

  toLoc(geometry) {
    this.setState({ mapViewDirection: geometry });
    this.renderBody();
  }

  renderBody() {
    if (this.state.refresh) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <ActivityIndicator color={Colors.primary1} size="large" />
        </View>
      );
    } else {
      if (this.state.coords != null) {
        return (
          <MapView
            style={styles.mapStyle}
            customMapStyle={mapStyle}
            followsUserLocation={true}
            cacheEnabled={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            zoomTapEnabled={true}
            maxZoomLevel={50}
            minZoomLevel={1}
            showsScale={true}
            userLocationAnnotationTitle={
              this.state.user
                ? this.state.user.name != null
                  ? this.state.user.name
                  : t("loginregister.programlock.namesurname")
                : t("loginregister.programlock.namesurname")
            }
            showsUserLocation={true}
            loadingEnabled={true}
            scrollEnabled={true}
            paddingAdjustmentBehavior="always"
            rotateEnabled={true}
            mapType="satellite"
            loadingIndicatorColor={Colors.primary1}
            provider="google"
            showsMyLocationButton={true}
            initialRegion={{
              latitude: this.state.coords.latitude ?? "40.3945714",
              longitude: this.state.coords.longitude ?? "49.7849202",
              latitudeDelta: 0.9,
              longitudeDelta: 0.9,
            }}
          >
            <FlatList
              data={this.state.markers}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderMarker.bind(this)}
            />
          </MapView>
        );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header name={t("drawer.map")} {...this.props} />
        </View>
        <View style={styles.content}>{this.renderBody()}</View>
        <SnBar
          visible={this.state.visible}
          changeVisible={() => this.setState({ visible: false })}
          snackBarMessage={this.state.snackBarMessage}
          snackBarStyle={this.state.snackBarStyle}
        />
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
  },
  content: {
    flex: 0.9,
    backgroundColor: Colors.white,
  },
  mapStyle: {
    flex: 1,
  },
});
