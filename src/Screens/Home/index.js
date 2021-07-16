import React, { useEffect, useState } from "react";

import { View, FlatList } from "react-native";


import apiProduto from "../../service/apiProduto";
import Produto from "../../model/produto";
import Card from "../../components/card/index";
import styles from "./styles";
import Header from "../../components/Header";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  const handleProdutos = async () => {
    const resposta = await apiProduto.buscarTodosProduto();
    setProdutos(resposta.data.map((produto) => new Produto(produto)));
  };

  const renderProduto = ({ item }) => (
    <Card
      name={item.nome}
      price={item.preco}
      image={item.url}
      description={item.descricao}
    />
  );

  useEffect(() => {
    handleProdutos();
  }, []);

  return (
      <View style={styles.containerHome}>
        <Header isDetailsPage />
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.nome}
          numColumns={2}
          renderItem={renderProduto}
          contentContainerStyle={styles.container}
        />
      </View>
  );
};

export default Home;
