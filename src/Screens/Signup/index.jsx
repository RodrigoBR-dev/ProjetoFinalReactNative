import React, { useState } from "react";
import Header from "../../components/Header/index";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  CheckBox,
  Image,
} from "react-native";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

import apiCreateUser from "../../service/apiCreateUser";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [CPF, setCPF] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  const createAccount = () => {
    // console.log(email, username, password, name, CPF, phoneNumber, birthDate);
    apiCreateUser
      .create(email, username, password, name, CPF, phoneNumber, birthDate)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
        let erroStatus = error.response.status;
        if (erroStatus == 403) {
          alert("Usuário ou senha inválido");
        }
      });
  };

  return (
    <View style={styles.container}>
      <Header isOnlyLogo />
      <View style={styles.header}>
        <Text style={styles.title}>Criar Conta</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setUsername}
          placeholder="Username"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setName}
          placeholder="Nome"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setPhoneNumber}
          placeholder="Telefone"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setCPF}
          placeholder="CPF"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setBirthDate}
          placeholder="Data de nascimento"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Senha"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Repita sua senha"
          style={styles.textInput}
        />
        <View style={styles.checkContainer}>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text>Lembrar de mim</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => createAccount()}
          onPress={() => navigation.navigate("Address")}
          style={styles.button}
        >
          <Text>Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textFooter}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Já tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
