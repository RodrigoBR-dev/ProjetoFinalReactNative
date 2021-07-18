import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F0C818",
  },
  boxSearch: {
    flexDirection: "row",
    alignItems: "center",
    width: "77%",
    height: 29,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#DBDBDB",
    backgroundColor: "white",
    marginRight: 30,
  },
  logo: {
    margin: "5%",
    width: "80%",
    height: "50%",
  },
  inputStyle: {
    width: "30%",
  },
  bag: {
    marginBottom: 8,
    marginLeft: 180,
  },
});

export default styles;
