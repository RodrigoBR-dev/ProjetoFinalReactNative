import React, { useState, useRef } from "react";
import Header from "../../components/Header/index";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  CheckBox,
} from "react-native";
import DatePicker from 'react-native-datepicker'
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import apiCreateUser from "../../service/apiCreateUser";
import asyncStorage from "../../service/asyncStorage";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [CPF, setCPF] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(maxDate);
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  const minDate = String(new Date().getFullYear() - 120) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  const maxDate = String(new Date().getFullYear() - 18) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();
  const ref_input7 = useRef();

  const createAccount = () => {
    apiCreateUser
      .create(email, username, password, name, CPF, phoneNumber, birthDate)
      .then((res) => {
        navigation.navigate("Login", { back: "Signup" })
      })
      .catch((error) => {
        console.error(error)
      });
  };

  function confirmPass() {
    if (password !== '') {
      if (password !== '' && password !== password2) {
      alert("Senhas não conferem");
      ref_input6.current.focus();
      setPassword('');
      setPassword2('');
    }
    } else {
      alert("Por favor, digite sua senha");
      ref_input6.current.focus()
    }
  }

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
          keyboardType='email-address'
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => { ref_input2.current.focus() }}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setUsername}
          placeholder="Username"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => { ref_input3.current.focus() }}
          ref={ref_input2}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setName}
          placeholder="Nome"
          returnKeyType="next"
          onSubmitEditing={() => { ref_input4.current.focus() }}
          ref={ref_input3}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setPhoneNumber}
          placeholder="Telefone"
          keyboardType='phone-pad'
          returnKeyType="next"
          onSubmitEditing={() => { ref_input5.current.focus() }}
          ref={ref_input4}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setCPF}
          keyboardType='numeric'
          placeholder="CPF"
          returnKeyType="next"
          onSubmitEditing={() => { ref_input6.current.focus() }}
          ref={ref_input5}
          style={styles.textInput}
        />
        <DatePicker
        style={styles.textInput}
        date={birthDate}
        mode="date"
        placeholder="Data Nascimento"
        format="YYYY-MM-DD"
        minDate={minDate}
        maxDate={maxDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            right: 0,
          },
          dateInput: {
            marginLeft: 0
          }
        }}
        onDateChange={setBirthDate}
      />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => { ref_input7.current.focus() }}
          ref={ref_input6}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setPassword2}
          value={password2}
          secureTextEntry
          placeholder="Repita sua senha"
          autoCapitalize="none"
          onSubmitEditing={() => { confirmPass() }}
          ref={ref_input7}
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
