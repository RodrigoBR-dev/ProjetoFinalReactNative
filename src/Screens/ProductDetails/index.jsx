import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NumericInput from "react-native-numeric-input";
import { Feather, AntDesign, MaterialIcons } from "react-native-vector-icons";

import { styles } from "./styles";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import money from "../../util/money";
import asyncStorage from "../../service/asyncStorage";
import apiPedido from "../../service/apiPedido";
import apiProduto from "../../service/apiProduto";

export default function ProductDetails({ route }) {
  const { name, price, image, description } = route.params;

  const [product, setProduct] = useState({});
  const [pedido, setPedido] = useState("");
  const [user, setUser] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  useEffect(() => {
    return navigation.addListener("focus", () => {
      getStates();
    });
  }, [navigation]);

  const getStates = async () => {
    let prod = await apiProduto.searchProductByName(name);
    setProduct(prod.data);
    setPedido(await asyncStorage.obterNumeroPedido());
    setUser(await asyncStorage.getUser());
  };

  function loginTest() {
    user ? buy() : navigation.navigate("Login", { back: "ProductDetails" });
  }

  function buy() {
    pedido ? updatePedido() : createPedido();
  }

  async function createPedido() {
    let address = "casa";
    await apiPedido
      .create(user, address, product.nome, quantity)
      .then((answer) => {
        asyncStorage.armazenarNumeroPedido(String(answer.data.numeroDoPedido));
        asyncStorage.armazenarEstoque(
          product.nome,
          String(product.quantEstoque)
        );
      });
    navigation.navigate("Home");
  }

  async function updatePedido() {
    await apiPedido.update(pedido, product.nome, quantity).then((answer) => {
      asyncStorage.armazenarEstoque(product.nome, String(product.quantEstoque));
    });
    navigation.navigate("Home");
  }

  async function handleFavorite() {
    const newFavorite = { name, price, image, description };
    const storage = asyncStorage.getFavorite();
    const favorites = storage ? JSON.parse(storage) : [];

    asyncStorage.storeFavorite(JSON.stringify([...favorites, newFavorite]));
  }

  return (
    <ScrollView>
      <Header isDetailsPage />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleFavorite}>
          <MaterialIcons name="favorite" size={50} />
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: image }} />

        <View style={styles.detailsContainer}>
          <View style={styles.payment}>
            <Text style={styles.pricing}>{money.formatarParaReal(price)}</Text>
            <View style={styles.iconContainer}>
              <AntDesign name="barcode" size={20} style={styles.icon} />
              <Text style={styles.paragraph}>
                {money.formatarParaReal(parseInt((price * 9) / 10))} no boleto
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Feather name="credit-card" size={20} style={styles.icon} />
              <Text style={styles.paragraph}>
                12X de {money.formatarParaReal(parseInt(price / 10))}
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <NumericInput
              value={quantity}
              onChange={(valor) => setQuantity(valor)}
              minValue={1}
              maxValue={product.quantEstoque}
              totalWidth={140}
              totalHeight={40}
              rounded
            />
            <Button onPress={() => loginTest()} big />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>Descrição</Text>
          <Text style={[styles.paragraph, { fontSize: 14 }]}>
            {description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
