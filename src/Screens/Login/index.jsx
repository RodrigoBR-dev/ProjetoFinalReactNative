import React, { useState } from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  CheckBox,
} from "react-native";

import styles from "./styles";
import apiLogin from "../../service/apiLogin";
import asyncStorage from "../../service/asyncStorage";

import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";

export default function Login({route}) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isSelected, setSelection] = useState(false);
  const { back } = route.params;

  const efetuarLogin = () => {
    if (!email || !senha) {
      alert("Favor informar e-mail e senha");
      return <></>;
    }

    apiLogin
      .logar(email, senha)
      .then((resposta) => {
        const token = resposta.data[0].Authorization;
        const user = resposta.data[1].userName;
        asyncStorage.armazenarToken(token);
        asyncStorage.armazenarUser(user);
        back === 'ProductDetails' ? navigation.goBack() : navigation.navigate("MyAccount");
      })
      .catch((error) => {
        let erroStatus = error.response.status;
        if (erroStatus == 403) {
          alert("Usuário ou senha inválido");
          return <></>;
        }
      });
  };

  return (
    <View style={styles.container}>
      <Header isOnlyLogo />
      <View style={styles.textContainer}>
        <TextInput
          onChangeText={setEmail}
          placeholder="Email cadastrado"
          style={styles.textInput}
        />
        <View style={styles.checkContainer}>
          <TextInput
            onChangeText={setSenha}
            placeholder="Senha"
            secureTextEntry={true}
            style={styles.textInput}
          />
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text>Lembrar de mim</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => efetuarLogin()} style={styles.button}>
          <Text>Fazer login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text>Ainda não tenho uma conta</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
