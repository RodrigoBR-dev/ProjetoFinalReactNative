import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Header from "../../components/Header";
import apiCreateAdrress from "../../service/apiCreateAdrress";
import asyncStorage from "../../service/asyncStorage";

import styles from "./styles";
export default function Address() {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [complement, setComplement] = useState("");
  const [number, setNumber] = useState("");
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  useEffect(() => {
   getUser();
  }, []);

  function getUser() {
    setUser(asyncStorage.getUser());
  }

  const createAddress = () => {
    console.log(cep, name, complement, number, user);
    // apiCreateAdrress
    //   .create(cep, name, user, number, complement)
    //   .then((res) => {
    //     console.log(res);
    //     navigation.navigate("Login")
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <View style={styles.container}>
      <Header isOnlyLogo />
      <View style={styles.boxInfo}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Endereço</Text>
        </View>
        <TextInput
          onChangeText={setName}
          placeholder="Apelido do endereço"
          returnKeyType="next"
          onSubmitEditing={() => { ref_input2.current.focus() }}
          style={styles.input}
        />
        <TextInput
          onChangeText={setCep}
          placeholder="Cep"
          keyboardType='numeric'
          returnKeyType="next"
          onSubmitEditing={() => { ref_input3.current.focus() }}
          ref={ref_input2}
          style={styles.input}
        />
        <TextInput
          onChangeText={setNumber}
          placeholder="N°"
          returnKeyType="next"
          onSubmitEditing={() => { ref_input4.current.focus() }}
          ref={ref_input3}
          style={styles.input}
        />
        <TextInput
          onChangeText={setComplement}
          placeholder="Complemento"
          ref={ref_input4}
          style={styles.input}
        />
      </View>
        <TouchableOpacity onPress={() => createAddress()} style={styles.button}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity > 
          <Text style={styles.textFooter}  onPress={() => navigation.navigate("Login")}>Já tenho uma conta</Text>
        </TouchableOpacity>
    </View>
  );
}
