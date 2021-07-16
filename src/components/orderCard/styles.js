import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 80,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },

  name: {
    width: 80,
  },

  finalPrice: {
    paddingLeft: 5,
    fontSize: 14,
  },
  
  price: {
    paddingRight: 5,
    fontSize: 14,
  },

  image: {
    width: 40,
    height: 40,
  },
});
