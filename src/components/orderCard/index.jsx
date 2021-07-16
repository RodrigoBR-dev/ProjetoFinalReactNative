import React, { useEffect, useState } from "react";
import NumericInput from "react-native-numeric-input";

import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import money from "../../util/money";
import asyncStorage from "../../service/asyncStorage";

export default function OrderCard({ name, image, price, quantity, totalValue, setTotalValue}) {
  const [stock, setStock] = useState(0);
  const [amount, setAmount] = useState(quantity);
  const [total, setTotal] = useState(0);
  let verificaQuant = quantity;

  useEffect(() => {
    getStock();
  }, []);

  useEffect(()  => {
    setTotal(price * amount);
    // calculaTotal();
  }, [amount]);

  async function getStock() {
    setStock(Number(await asyncStorage.obterEstoque(name)));
  }

  // const calculaTotal = () => {
  //   if(verificaQuant > amount){
  //     setTotalValue(totalValue - price)
  //   }else if( verificaQuant < amount){
  //     setTotalValue(totalValue + price)
  //   }
  // }

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{money.formatarParaReal(price)}</Text>
      <NumericInput
        value={amount}
        onChange={(quant) => setAmount(quant)}
        minValue={0}
        maxValue={stock}
        totalWidth={40}
        totalHeight={50}
        type={"up-down"}
        rounded
      />
      <Text style={styles.finalPrice}>{money.formatarParaReal(total)}</Text>
    </View>
  );
}