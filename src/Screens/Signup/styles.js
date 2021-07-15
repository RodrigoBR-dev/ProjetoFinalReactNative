import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    height: 40,
    width: "100%",
    overflow: "hidden",
    borderBottomWidth: 2,
    borderColor: "#ddd",
    marginBottom: 10,
    padding: 10,
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
