import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import styles from "./styles";
import money from "../../util/money";
function Card(props) {
  return (
    <View style={styles.Container}>
      <View style={styles.Card}>
        <TouchableOpacity style={styles.boxIcon}>
          <MaterialIcons //add icone para favoritar produtos em uma lista
            style={styles.iconFavorite}
            name="favorite"
            size={30}
            color="#E80510"
          />
        </TouchableOpacity>
        <Image style={styles.Imagem} source={{ uri: props.imagem }} />
        <Text style={styles.Titulo}>{props.nome}</Text>
        <Text style={styles.Info}>{money.formatarParaReal(props.preco)}</Text>
        <TouchableOpacity style={styles.button} value="COMPRAR"  >
          <Text style={styles.textButton}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Card;
