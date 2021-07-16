import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import NumericInput from 'react-native-numeric-input'
import { Feather, AntDesign } from "react-native-vector-icons";

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
    return navigation.addListener('focus', () => {
      getStates();
    })
  }, [navigation])

  const getStates = async () => {
    setProduct(await apiProduto.searchProductByName(name));
    setPedido(await asyncStorage.obterNumeroPedido());
    setUser(await asyncStorage.getUser());
  }

  async function loginTest() {
    user ? buy() : navigation.navigate('Login', {back:'ProductDetails'});
  }
  
  function buy() {
    pedido ? updatePedido() : createPedido();
  }

  async function createPedido() {
    let address = 'casa';
    await apiPedido.create(user, address, product, quantity)
        .then(answer => {
            asyncStorage.armazenarNumeroPedido(answer.data.numeroDoPedido);
            asyncStorage.armazenarEstoque(product.nome, product.quantEstoque);
      });
      navigation.navigate('Home');
  }

  function updatePedido() {
    console.log('Atualizar pedido: ' + pedido)
  }

  return (
    <ScrollView>
      <Header isDetailsPage />
      <View style={styles.container}>
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
          <View>
            <NumericInput 
              value={quantity} 
              totalWidth={140} 
              totalHeight={40} 
              rounded 
              valueType='real'
              onChange={valor => setQuantity(valor)} />
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
