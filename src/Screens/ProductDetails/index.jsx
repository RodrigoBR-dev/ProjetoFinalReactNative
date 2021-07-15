import React from "react";

import { View, Image, Text, ScrollView } from "react-native";
import { Feather, AntDesign } from "react-native-vector-icons";
import { styles } from "./styles";

import { Button } from "../../components/Button";

import Header from "../../components/Header";
import money from "../../util/money";

export default function ProductDetails({ route }) {
  const { name, price, image, description } = route.params;
  return (
    <ScrollView>
      <Header isDetailsPage />
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />

        <View style={styles.detailsContainer}>
          <View style={styles.payment}>
            <Text style={styles.pricing}>{money.formatarParaReal(price)}</Text>
            <View style={styles.iconContainer}>
              <AntDesign name="barcode" size={20} style={styles.icon} />
              <Text style={styles.paragraph}>
                {money.formatarParaReal(parseInt((price * 9) / 10))} no boleto
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Feather name="credit-card" size={20} style={styles.icon} />
              <Text style={styles.paragraph}>
                12X de {money.formatarParaReal(parseInt(price / 10))}
              </Text>
            </View>
          </View>
          <Button big />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>Descrição</Text>
          <Text style={[styles.paragraph, { fontSize: 14 }]}>
            {description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
