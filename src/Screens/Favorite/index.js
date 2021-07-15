import React from "react";
import { View, Text } from "react-native";

import Header from "../../components/Header";

import styles from "./styles";

const Favorite = () => {
  return (
    <View style={styles.container}>
      <Header isDetailsPage />
      <View style={styles.container}>
        <Text style={styles.texto}>Sou um favotiro</Text>
      </View>
    </View>
  );
};

export default Favorite;
