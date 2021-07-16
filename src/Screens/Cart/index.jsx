import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import asyncStorage from "../../service/asyncStorage";
import apiPedido from "../../service/apiPedido";
import OrderCard from "../../components/orderCard";
import CartProduct from "../../model/cartProduct";

import Header from "../../components/Header";

import { Button } from "../../components/Button";

export default function Cart() {
  const navigation = useNavigation();
  const [orderNumber, setOrderNumber] = useState("");
  const [products, setProducts] = useState([]);
  const [delivery, setDelivery] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [productsValue, setProductsValue] = useState(0);

  useEffect(() => {
    getOrderNumber();
  }, []);

  useEffect(() => {
    getPedido();
  }, [orderNumber]);

  async function getOrderNumber() {
    setOrderNumber(await asyncStorage.obterNumeroPedido());
  }

  async function getPedido() {
    if (orderNumber) {
      await apiPedido.get(orderNumber).then((answer) => {
        setDelivery(answer.data.frete);
        setDeliveryDate(answer.data.dataEntrega);
        setProductsValue(answer.data.totalProdutos);
        setProducts(answer.data.produto.map((obj) => new CartProduct(obj)));
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header isOnlyLogo />
      <FlatList
        data={products}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <OrderCard
            name={item.nome}
            price={item.valor}
            image={item.imagem}
            quantity={item.quantidade}
          />
        )}
        contentContainerStyle={styles.flat}
      />
      <View style={styles.info}>
        <Text style={styles.paragraph}>Valor total da compra: </Text>
        <View style={styles.buttonContainer}>
          <Button
            big
            title="Continue comprando"
            onPress={() => navigation.navigate("Home")}
          ></Button>
          <Button
            big
            title="Finalizar compra"
            onPress={() => navigation.navigate("Home")}
          ></Button>
        </View>
      </View>
    </View>
  );
}
