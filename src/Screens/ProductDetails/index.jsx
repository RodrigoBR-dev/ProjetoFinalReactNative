import React from "react";

import { View, Text } from "react-native";

import { styles } from "./styles";

export default function ProductDetails({ route }) {
  const { name, price, image, description } = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
