import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const CardCategory = (props) => {
  return(
    <View>
      <Text>{props.nome}</Text>
    </View>
  )
}

export default CardCategory;