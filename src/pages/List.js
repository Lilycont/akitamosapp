import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, LogBox } from "react-native";

import Search from "../components/Search.js";
import Card from "../components/Card.js";
import firebase from "../utils/firebase";
LogBox.ignoreLogs(["Setting a timer"]);
const cardsInfo = [
  {
    image: `https://picsum.photos/id/302/200/200`,
    title: `Buenos dias amor`,
    description: `Amor amor, que tiene tu cara que ha perdido el color`,
    likes: 312,
  },
  {
    image: `https://picsum.photos/id/381/200/200`,
    title: `Alo alo`,
    description: `No dejabas de mirar estabas sola completamente bella y sensual`,
    likes: 241,
  },
  {
    image: `https://picsum.photos/id/338/200/200`,
    title: `Almohada`,
    description: `Amor como el nuestro no hay dos en la vida, por mas que se busque por mas que se esconda`,
    likes: 211,
  },
  {
    image: `https://picsum.photos/id/310/200/200`,
    title: `Preguntaselo a ella`,
    description: `Pues anda llamala y preguntaselo a ella`,
    likes: 187,
  },
  {
    image: `https://picsum.photos/id/352/200/200`,
    title: `El triste`,
    description: `Que triste fue decirnos adios cuando nos adorabamos mas`,
    likes: 90,
  },
  {
    image: `https://picsum.photos/id/301/200/200`,
    title: `Amar y querer`,
    description: `Es que casi todos sabemos querer, pero todos sabemos amar`,
    likes: 60,
  },
  {
    image: `https://picsum.photos/id/101/200/200`,
    title: `El (him)`,
    description: `Junto a la ventana, unos cigarros encontre, no es mi marca ya lo se yo no los olvide`,
    likes: 41,
  },
  {
    image: `https://picsum.photos/id/108/200/200`,
    title: `Por estar contigo`,
    description: `Por estar contigo por estar contigo, yo amapola si tu fueras trigo`,
    likes: 39,
  },
  // {image : ``, title : ``, description : ``, likes : ``},
];
export default function Login({ navigation }) {
  const [cardsList, setCardsList] = useState([]);

  const getItems = async () => {
    var _cardsList = [];
    var snapshot = firebase.firestore().collection("locales");
    const data = (await snapshot.get()).docChanges();
    data.map((item, key) => {
      let aux = item.doc.data();
      _cardsList.push(
        <Card
          key={key}
          image={aux.image}
          title={aux.title}
          description={aux.description}
          likes={aux.likes}
          navigator={navigation}
          data={aux}
        />
      );
    });
    setCardsList(_cardsList);
  };

  //Call when component is rendered
  useEffect(() => {
    getItems();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <Search />
        {cardsList && cardsList}
      </SafeAreaView>
    </ScrollView>
  );
}
