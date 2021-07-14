import React, { useEffect } from 'react';
import { View , Text, Image } from 'react-native';
import styles from './styles';
import money from '../../util/money'
import {
    MaterialCommunityIcons,
    Feather,
    MaterialIcons,
  } from "react-native-vector-icons";
function Card(props){

    return(

        <View style={styles.Container} >
        <View style={styles.Card}>
        <MaterialCommunityIcons name="home" color={color} size={35} />
            <Image style={styles.Imagem} source={{uri:props.imagem}}/>
        </View>
            <Text style={styles.Titulo} >{props.nome}</Text>
            <Text style={styles.Info}>{money.formatarParaReal(props.preco)}</Text>
        </View>
    )
}
export default Card;