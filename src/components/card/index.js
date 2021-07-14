import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import money from "../../util/money";

import { useNavigation } from "@react-navigation/native";

function Card({ name, price, image, description }) {
  const navigation = useNavigation();

  function handleProductDetails(name, price, image, description) {
    navigation.navigate("ProductDetails", { name, price, image, description });
  }

  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={() => handleProductDetails(name, price, image, description)}
    >
      <View style={styles.Card}>
        <Image style={styles.Imagem} source={{ uri: image }} />
      </View>
      <Text style={styles.Titulo}>{name}</Text>
      <Text style={styles.Info}>{money.formatarParaReal(price)}</Text>
    </TouchableOpacity>
  );
}
export default Card;
