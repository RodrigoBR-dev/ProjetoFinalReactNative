import React, { useEffect } from 'react';
import { View , Text, Image } from 'react-native';
import styles from './styles';
import money from '../../util/money'

function Card(props){

    return(
        <View style={styles.Container}>
            <Text style={styles.Titulo} >{props.nome}</Text>
            <Image style={styles.Imagem} source={{uri:props.imagem}}/>
            <Text style={styles.Info}>{money.formatarParaReal(props.preco)}</Text>
        </View>
    )
}
export default Card;