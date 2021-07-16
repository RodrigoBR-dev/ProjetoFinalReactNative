import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList } from "react-native";
import asyncStorage from "../../service/asyncStorage";
import styles from "./styles";

import Produto from "../../model/produto";

import Card from "../../components/Card";

import Header from "../../components/Header";

import { useFocusEffect } from "@react-navigation/native";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    const storageFavorites = await asyncStorage.getFavorite();
    if (storageFavorites) {
      setFavorites(
        JSON.parse(storageFavorites).map(
          (produto) =>
            new Produto({
              nome: produto.name,
              descricao: produto.description,
              preco: produto.price,
              categoria: produto.category,
              url: produto.image,
            })
        )
      );
    } else {
      setFavorites(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFavorites();
    })
  );

  return (
    <View style={styles.containerFavorite}>
      <Header isDetailsPage />
      {favorites ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.name}
          numColumns={2}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <Card
                name={item.nome}
                price={item.preco}
                image={item.url}
                description={item.descricao}
              />
            );
          }}
          contentContainerStyle={styles.container}
        />
      ) : (
        <Text>Você não favoritou nenhum produto</Text>
      )}
    </View>
  );
};

export default Favorite;
