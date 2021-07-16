import React, { useEffect, useState } from 'react';
import NumericInput from 'react-native-numeric-input'

import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import money from '../../util/money'
import asyncStorage from '../../service/asyncStorage';

export default function OrderCard({name, image, price, quantity}) {

    const [stock, setStock] = useState(0);
    const [amount, setAmount] = useState(quantity);
    const [total, setTotal] = useState('')
  
    useEffect(() => {
        getStock()
    }, [])

    useEffect(() => {
        
        setTotal(money.formatarParaReal(parseFloat(price*amount)))
    }, [amount])

    async function getStock() {
        setStock(Number(await asyncStorage.obterEstoque(name)));
    }

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{money.formatarParaReal(price)}</Text>
            <NumericInput 
                value={amount} 
                onChange={quant => setAmount(quant)}
                minValue={0}
                maxValue={stock}
                totalWidth={40} 
                totalHeight={50} 
                type={'up-down'}
                rounded/>
            <Text>{total}</Text>
        </View>
    );
}