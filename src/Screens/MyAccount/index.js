import React from "react";
import { View, Text, Button, Image } from "react-native";

// import { Container } from './styles';
import styles from "./styles";

const MyAccount = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/logo-2.png")} />
      <Text style={styles.texto}>Sou minha conta</Text>
      <Button title='Login' onPress={() => navigation.navigate('Login')}/>
    </View>
  );
};

export default MyAccount;
