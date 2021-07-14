import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

import styles from "./styles";
import money from "../../util/money";

import { Button } from "../Button";

import { useNavigation } from "@react-navigation/native";

function Card({ name, price, image, description }) {
  const navigation = useNavigation();
  function handleProductDetails() {
    navigation.navigate("ProductDetails", { name, price, image, description });
  }

  return (
    <TouchableOpacity
      style={styles.Card}
      onPress={() => handleProductDetails()}
    >
      {/* <TouchableOpacity style={styles.boxIcon}>
        <MaterialIcons
            style={styles.iconFavorite}
            name="favorite"
            size={30}
            color="#E80510"
          />
      </TouchableOpacity> */}
      <Image style={styles.Imagem} source={{ uri: image }} />
      <Text style={styles.Titulo}>{name}</Text>
      <Text style={styles.Info}>{money.formatarParaReal(price)}</Text>
      <Button />
    </TouchableOpacity>
  );
}
export default Card;
