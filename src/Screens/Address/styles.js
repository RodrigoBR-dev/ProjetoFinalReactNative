import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    // flexDirection: "row"
  },
  boxInfo: {
    width: "100%",
    alignItems:"center",
    justifyContent:"space-evenly",
    margin: 10,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 20,
    textShadowColor: "#F0C818",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.9,
  },
  input: {
    width: "80%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {
    height: 40,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F0C818",
  },
  textFooter:{
    color: "black",
    margin: "10%"
  }
});

export default styles;
