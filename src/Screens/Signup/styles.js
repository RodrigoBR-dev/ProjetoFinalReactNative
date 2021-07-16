import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
  },
  header: {
    margin: 10,
    alignSelf: "flex-start",
    marginLeft: "10%",
    textShadowOffset: { width: 0.9, height: 0.5 },
    textShadowRadius: 0.9,
  },
  title: {
    fontSize: 20,
    color: "black",
    fontSize: 20,
    textShadowColor: "#F0C818",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.9,
  },
  textContainer: {
    width: "80%",
    justifyContent: "space-around",
  },

  footer: {
    flex: 1,
    alignItems: "center",
    width: "70%",
    justifyContent: "space-around",
  },

  textInput: {
    height: 40,//trabalhar altura com pixel para não da diferença na hora de abrir o teclado
    width: "100%",
    // overflow: "hidden",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  checkContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  button: {
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F0C818",
  },
});

export default styles;
