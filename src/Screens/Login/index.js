import React, { useState} from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  CheckBox,
  Button,
} from 'react-native';

import styles from './styles';
import { logar } from '../../service/apiLogin'
import asyncStorage from '../../service/asyncStorage'

export default function Login(){
  
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [isSelected, setSelection] = useState(false);

  const efetuarLogin = () => {
    if (!email || !senha) {
      alert("Favor informar e-mail e senha");
      return (<></>);
    }

   logar(email, senha)
      .then(resposta => {
        const token = resposta.data[0].Authorization;
        //const user = resposta.data[1].userName;
        armazenarToken(token);
        //utilStorage.armazenarUser(user);
      })
      .catch(error => {
        let erroStatus = error.response.status;
        if (erroStatus == 403) {
        alert("Usuário ou senha inválido");
        return
        }
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
        <View style={styles.textContainer}>
            <TextInput onChangeText={setEmail} placeholder="Email cadastrado" style={styles.textInput}/>
            <View style={styles.checkContainer}>
              <TextInput onChangeText={setSenha} placeholder="Senha" secureTextEntry={true} style={styles.textInput}/>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
              />
              <Text>Lembrar de mim</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => efetuarLogin} style={styles.button}><Text>Criar conta</Text></TouchableOpacity>
            <TouchableOpacity><Text>Esqueci minha senha</Text></TouchableOpacity>
        </View>
    </View>
  );
}