import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

import Header from "../../components/Header";
import styles from "./styles";

import { useFocusEffect } from "@react-navigation/native";
import asyncStorage from "../../service/asyncStorage";

const MyAccount = ({ navigation }) => {
  const [user, setUser] = useState(false);
  async function clearFavorites() {
    asyncStorage.removeFavorite();
  }

  async function removeUser() {
    await asyncStorage.removeUser();
    navigation.navigate("Home");
  }

  async function getUser() {
    const session = await asyncStorage.getUser();
    if (session) {
      setUser(true);
    } else {
      setUser(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getUser();
    })
  );

  return (
    <View style={styles.container}>
      <Header isOnlyLogo />
      {user ? (
        <TouchableOpacity style={styles.boxOption} onPress={removeUser}>
          <MaterialIcons name="login" size={40} color="#F0C818" />
          <Text style={styles.textOption}>Logout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.boxOption}
          onPress={() => navigation.navigate("Login", { back: "MyAccount" })}
        >
          <MaterialIcons name="login" size={40} color="#F0C818" />
          <Text style={styles.textOption}>Entrar</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.boxOption}>
        <MaterialIcons name="help-outline" size={40} color="#F0C818" />
        <Text style={styles.textOption}>Ajuda/FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boxOption}
        onPress={() => navigation.navigate("Address", { back: "MyAccount" })}
        >
        <MaterialIcons name="contact-mail" size={40} color="#F0C818" />
        <Text style={styles.textOption}>Endereço</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxOption} onPress={clearFavorites}>
        <MaterialIcons name="favorite" size={40} color="#F0C818" />
        <Text style={styles.textOption}>Limpar todos os favoritos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyAccount;
