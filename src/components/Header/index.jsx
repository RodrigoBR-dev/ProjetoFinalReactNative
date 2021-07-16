import React from "react";
import { View, Image, TextInput } from "react-native";
import { EvilIcons, FontAwesome5 } from "react-native-vector-icons";

import styles from "./style";

const Header = ({ isDetailsPage, isOnlyLogo }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/logo-2.png")}
      />
      {!isOnlyLogo && (
        <View style={styles.boxSearch}>
          <EvilIcons
            style={styles.searchIcon}
            name="search"
            size={20}
            color="#F0C818"
          />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            placeholder="Procurar"
          />

          <FontAwesome5
            style={[styles.bag, isDetailsPage && { color: "#000000" }]}
            name="shopping-bag"
            size={29}
          />
        </View>
      )}
    </View>
  );
};

export default Header;
