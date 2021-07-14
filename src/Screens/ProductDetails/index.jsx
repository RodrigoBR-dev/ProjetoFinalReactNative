import React from "react";

import { View, Text } from "react-native";

import { styles } from "./styles";

import Header from "../../components/Header";

export default function ProductDetails({ route }) {
  const { name, price, image, description } = route.params;
  return (
    <View style={styles.container}>
      <Header isDetailsPage />
      <Text>{name}</Text>
    </View>
  );
}
