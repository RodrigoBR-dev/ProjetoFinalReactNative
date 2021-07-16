import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import asyncStorage from "../../service/asyncStorage";
import styles from "./styles";
import apiProduto from "../../service/apiProduto";
import Card from "../../components/card";
import Produto from "../../model/produto";

const Favorite = () => {
  const [product, setProduct] = useState([]);
  const [nameProduct, setNameProduct] = useState("");
  useEffect(() => {
    store();
    renderFavorite();
  }, []);

  const store = async () => {
    setNameProduct(await asyncStorage.getFavorite());
  };

  const renderFavorite = async () => {
    await apiProduto.searchProductByName(nameProduct).then((res) => {
      console.log(nameProduct);
      setProduct(res.data.map((produto) => new Produto(produto)));
    });

    // console.log(product)
  };

  const renderProduto = ({ item }) => (
    <Card
      name={item.nome}
      price={item.preco}
      image={item.url}
      description={item.descricao}
    />
  );

  return (
    <FlatList
      data={product}
      keyExtractor={(item) => item.nome}
      numColumns={2}
      renderItem={renderProduto}
      contentContainerStyle={styles.container}
    />
  );
};
export default Favorite;
