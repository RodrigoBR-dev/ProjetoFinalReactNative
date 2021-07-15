import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F0C818",
  },
  boxSearch: {
    flexDirection: "row",
    alignItems: "center",
    width: 260,
    height: 29,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#DBDBDB",
    backgroundColor: "white",
    marginRight: 30,
  },
  logo: {
    marginBottom: 10,
    width: 270,
    height: 100,
  },
  inputStyle: {
    width: 65,
  },
  bag: {
    marginBottom: 8,
    marginLeft: 180,
  },
});

export default styles;
