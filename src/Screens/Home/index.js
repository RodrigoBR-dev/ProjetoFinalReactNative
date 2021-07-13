import React from "react";
import { View, Text } from "react-native";

import Header from "../../components/Header";

import styles from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <Text style={styles.texto}>Sou uma home</Text>
    </View>
  );
};

export default Home;
