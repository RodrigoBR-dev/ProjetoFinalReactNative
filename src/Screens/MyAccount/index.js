import React from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';
import styles from "./styles";

const MyAccount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Sou minha conta</Text>
    </View>
  );
};

export default MyAccount;
