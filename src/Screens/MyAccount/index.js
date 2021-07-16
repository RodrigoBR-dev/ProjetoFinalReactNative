import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "react-native-vector-icons";

import Header from "../../components/Header";
// import { Container } from './styles';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const MyAccount = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header isOnlyLogo />
      <TouchableOpacity
        style={styles.boxOption}
        onPress={() => navigation.navigate("Login")}
      >
        <MaterialIcons name="login" size={40} color="#F0C818" />
        <Text style={styles.textOption}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boxOption}
      >
        <MaterialIcons name="help-outline" size={40} color="#F0C818" />
        <Text style={styles.textOption}>Ajuda/FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boxOption}
      >
        <Ionicons name="settings" size={40} color="#F0C818" />
        <Text style={styles.textOption}>Ajuda/FAQ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyAccount;
