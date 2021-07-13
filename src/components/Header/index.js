import React from "react";
import { View, Text, TextInput } from "react-native";
import { EvilIcons, FontAwesome5 } from "react-native-vector-icons";

import styles from "./style";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Luxury</Text>
      <View style={styles.boxSearch}>
        <EvilIcons
          style={styles.searchIcon}
          name="search"
          size={20}
          color="#b9b9b9"
        />
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          placeholder="Procurar"
        />

        <FontAwesome5 style={styles.bag} name="shopping-bag" size={35} />
      </View>
    </View>
  );
};

export default Header;
