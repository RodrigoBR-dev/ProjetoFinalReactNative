import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const CardCategory = (props) => {
  return(
    <View >
        <View >
            <Text>{props.nome}</Text>
        </View>
    </View>
  )
}

export default CardCategory;