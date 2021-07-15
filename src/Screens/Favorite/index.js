import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import asyncStorage from "../../service/asyncStorage";
import styles from "./styles";

const Favorite = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    store2()

  }, []);

  const store2 = async() => {
    const store = await asyncStorage.getFavorite();
    console.log(store)
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Sou um favotiro</Text>
    </View>
  );
};

export default Favorite;
