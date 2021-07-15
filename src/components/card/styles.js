import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Card: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    paddingVertical: 20,
  },
  boxIcon: {
    alignSelf: "flex-end",
  },
  iconFavorite: {
    padding: 5,
    alignItems: "flex-end",
  },
  Titulo: {
    textAlign: "center",
    width: 160,
  },
  Imagem: {
    width: 100,
    height: 100,
    borderRadius: 20,
    // backgroundColor:'#1ECBE1',
  },
  Info: {
    textShadowColor: "#F0C818",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.9,
    fontSize: 20,
  },
});
export default styles;
