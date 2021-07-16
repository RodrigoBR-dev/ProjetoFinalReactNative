import React, { useEffect, useState } from "react";
import NumericInput from "react-native-numeric-input";

import { View, Text } from "react-native";

import { styles } from "./styles";
import money from "../../util/money";
import asyncStorage from "../../service/asyncStorage";

export default function OrderCard({ name, pic, price, quantity, totalCart ,setTotalCart}) {
  const [stock, setStock] = useState(0);
  const [amount, setAmount] = useState(quantity);
  const [total, setTotal] = useState(0);
  let verificaQuant = quantity;

  useEffect(() => {  
    // setTotalCart(totalCart + (price * amount));
    getStock();
  }, []);

  useEffect(()  => {
    setTotal((price * amount));
    calculaTotal();
     // setAsyncTotal();
  }, [amount]);

  useEffect(() => {
    
  },[])

  const setAsyncTotal = async () => {
    asyncStorage.armazenarTotal(String(name), String(price * amount));   
  }

  async function getStock() {
    setStock(Number(await asyncStorage.obterEstoque(name)));
  }

  const calculaTotal = () => {
    if(verificaQuant > amount){
      setTotalCart(totalCart - (price))
    }else if( verificaQuant < amount){
      setTotalCart(totalCart + (price))
    }


  }

  return (
    <View style={styles.card}>
      {/* <Image style={styles.image} source={{ uri: pic }} /> */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{money.formatarParaReal(price)}</Text>
      <NumericInput
        value={amount}
        onChange={(quant) => setAmount(quant)}
        minValue={0}
        maxValue={stock}
        totalWidth={55}
        totalHeight={50}
        type={"up-down"}
        rounded
      />
      <Text style={styles.finalPrice}>{total}</Text>
    </View>
  );
}
