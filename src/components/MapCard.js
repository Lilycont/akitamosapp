import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import { Divider } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const BigCard = ({ location, coordinates }) => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <View style={styles.content}>
            <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
              Location
            </Text>
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode={"tail"}
            >
              {location}
            </Text>
          </View>
        </View>
        <MapView
          initialRegion={{
            latitude: coordinates.lat,
            longitude: coordinates.lng,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          }}
          style={{ height: 400 }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 20.526651,
              longitude: -101.371898,
            }}
            title={`Abby's Novedades`}
            description={`Tienda de regalos abbys`}
          />
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 10 },
  cardRow: {
    flexDirection: "row",
    margin: 5,
  },

  content: {
    marginLeft: 10,
    flexDirection: "column",
  },
  title: {
    marginLeft: 15,
    fontSize: 20,
    color: "black",
  },
  description: {
    marginVertical: 10,
    color: "black",
  },
});

export default BigCard;
