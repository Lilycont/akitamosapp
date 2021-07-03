import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Divider } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const BigCard = ({ image, title, description, likes, phone }) => {
  return (
    <>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.cardRow}>
          <View style={styles.content}>
            <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
              {title}
            </Text>
            {/* <View style={styles.likesView}>
              <TouchableOpacity>
                <View style={styles.likesViewInner}>
                  <MaterialIcons name="favorite-border" size={30} color="red" />
                  <Text style={styles.likesText}>{likes}</Text>
                </View>
              </TouchableOpacity>
            </View> */}
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode={"tail"}
            >
              {description}
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 20,
                padding: 5,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.SECONDARY_YELLOW,
                width: "30%",
              }}
              onPress={() => Linking.openURL(`tel:${phone}`)}
            >
              <Text style={{ color: "#fff", fontWeight: "500" }}>Contacto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 10 },
  cardRow: {
    flexDirection: "row",
    margin: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    marginLeft: 10,
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  description: {
    color: "black",
    width: Dimensions.get("screen").width - 100,
  },
  likesView: {
    padding: 5,
  },
  likesViewInner: {
    flexDirection: "row",
  },
  likesText: {
    fontSize: 12,
    padding: 5,
    color: "red",
    fontWeight: "bold",
  },
});

export default BigCard;
