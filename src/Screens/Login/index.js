import React from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './styles';

export default function Login(){
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
        <View style={styles.textContainer}>
            <TextInput placeholder="Email cadastrado" style={styles.textInput}/>
            <TextInput placeholder="Senha" secureTextEntry={true} style={styles.textInput}/>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button}><Text>Criar conta</Text></TouchableOpacity>
            <TouchableOpacity><Text>Esqueci minha senha</Text></TouchableOpacity>
        </View>
    </View>
  );
}