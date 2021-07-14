import React, { useEffect, useState } from "react";
import { View, FlatList, StatusBar } from "react-native";
import apiProduto from "../../service/apiProduto";
import Produto from "../../model/produto";
import Card from "../../components/card/index";

import Header from "../../components/Header";


import styles from "./styles";

const Home = () => {

  const [produtos, setProdutos] = useState([]);


  const handleProdutos = async () => {
    const resposta = await apiProduto.buscarTodosProduto();
    setProdutos(resposta.data.map((produto) => new Produto(produto)));
  };

  const renderProduto = ({ item }) => (
    <Card nome={item.nome} preco={item.preco} imagem={item.url} />
  );

  useEffect(() => {
    handleProdutos();
  }, [produtos]);

  return (
    <View>
       <FlatList
        style={styles.CardContainer}
        data={produtos}
        keyExtractor={(item) => item.nome}
        numColumns={2}
        renderItem={renderProduto}
      />

    </View>
  );
};

export default Home;
