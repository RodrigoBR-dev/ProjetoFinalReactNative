import React from "react";
import { View, Text, Button } from "react-native";

// import { Container } from './styles';
import styles from "./styles";

const MyAccount = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Sou minha conta</Text>
      <Button title='Login' onPress={() => navigation.navigate('Login', {back:'MyAccount'})}/>
    </View>
  );
};

export default MyAccount;
