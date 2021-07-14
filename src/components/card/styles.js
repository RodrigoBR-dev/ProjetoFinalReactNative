import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  Card: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  boxIcon: {
    alignSelf: "flex-end",
  },
  iconFavorite: {
    padding: 10,
    alignItems: "flex-end",
  },
  Titulo: {
    fontWeight: "900",
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
  button: {
    width: 100,
    height: 30,
    borderRadius: 8,
    margin: 5,
    backgroundColor: "#F0C818",
  },
  textButton: {
    padding: 3,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.1,
    borderWidth:1,
    borderRadius:8,
    borderColor:"#F0DE18"
  },
});
export default styles;
