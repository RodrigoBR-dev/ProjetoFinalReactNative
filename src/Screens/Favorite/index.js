import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

const Favorite = () => {
  return (
    <View  style={styles.container}>
      <Text style={styles.texto}>Sou um favotiro</Text>
    </View>
  );
};

export default Favorite;
