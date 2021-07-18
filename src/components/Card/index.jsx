import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import money from "../../util/money";

export default function Card({ name, price, image, description }) {
  const navigation = useNavigation();
  function handleProductDetails() {
    navigation.navigate("ProductDetails", { name, price, image, description });
  }

  return (
    <TouchableOpacity
      style={styles.Card}
      onPress={() => handleProductDetails()}
    >
      <Image style={styles.Imagem} source={{ uri: image }} />
      <Text style={styles.Titulo}>{name}</Text>
      <Text style={styles.Info}>{money.formatarParaReal(price)}</Text>
    </TouchableOpacity>
  );
}