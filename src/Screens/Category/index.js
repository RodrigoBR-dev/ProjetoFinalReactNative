import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Sou uma categoria</Text>
    </View>
  );
};

export default Category;
