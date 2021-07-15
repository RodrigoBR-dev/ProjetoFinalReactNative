import React, { useState } from "react";
import Header from "../../components/Header";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/core";

import styles from "./styles";
export default function Address() {
  const navigation = useNavigation();
  const [cep, setCep] = useState("");
  const [nameStreet, setNameStreet] = useState("");
  const [complement, setComplement] = useState("");
  const [number, setNumber] = useState("");

  return (
    <View style={styles.container}>
      <Header isOnlyLogo />
      <View style={styles.boxInfo}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Endereço</Text>
        </View>
        <TextInput
          onChangeText={setCep}
          placeholder="Cep"
          style={styles.input}
        />
        <TextInput
          onChangeText={setNameStreet}
          placeholder="Rua"
          style={styles.input}
        />
        <TextInput
          onChangeText={setNumber}
          placeholder="N°"
          style={styles.input}
        />
        <TextInput
          onChangeText={setComplement}
          placeholder="Complemento"
          style={styles.input}
        />
      </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity > 
          <Text style={styles.textFooter}  onPress={() => navigation.navigate("Login")}>Já tenho uma conta</Text>
        </TouchableOpacity>
    </View>
  );
}
