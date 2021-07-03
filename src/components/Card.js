import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

const Card = ({ image, title, description, likes, navigator, data }) => {
  useEffect(() => {});

  const navigate = () => {
    navigator.navigate("Info", data);
  };

  return (
    <TouchableOpacity onPress={navigate}>
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.content}>
            <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
              {title}
            </Text>
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode={"tail"}
            >
              {description}
            </Text>
            {/* <View style={styles.likesView}>
              <TouchableOpacity>
                <View style={styles.likesViewInner}>
                  <MaterialIcons name="favorite-border" size={30} color="red" />
                  <Text style={styles.likesText}>{likes}</Text>
                </View>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 10 },
  cardRow: {
    flexDirection: "row",
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
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
    width: Dimensions.get("screen").width - 120,
  },
  likesView: {
    padding: 5,
    alignItems: "flex-end",
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

export default Card;
