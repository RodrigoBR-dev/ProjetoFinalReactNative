import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  boxTitle:{
    backgroundColor:"red"
  },
  title: {
    alignSelf:"flex-start",
    marginLeft: "5%",
    padding: "5%",
    fontSize: 20,
    textShadowColor: "#F0C818",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.9,
  },
  header: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    flex: 1,
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
    width: "100%",
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
