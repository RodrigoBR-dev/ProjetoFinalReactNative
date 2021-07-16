import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import asyncStorage from "../../service/asyncStorage";
import styles from "./styles";

import Card from "../../components/Card";

import Header from "../../components/Header";

const Favorite = () => {
  const [favorites, setFavorites] = useState({});

  async function fetchFavorites() {
    const storageFavorites = await asyncStorage.getFavorite();
    setFavorites(storageFavorites);
    console.log(storageFavorites);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <View style={styles.containerFavorite}>
      <Header isDetailsPage />
      {/* <FlatList
        data={favorites}
        keyExtractor={(item) => item.nome}
        numColumns={1}
        renderItem={({ item }) => (
          <Card
            name={item.nome}
            price={item.preco}
            image={item.url}
            description={item.descricao}
          />
        )}
        contentContainerStyle={styles.container}
      /> */}
    </View>
  );
};

export default Favorite;
