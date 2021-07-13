import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "#FFBF00",
    alignItems: "center",
    justifyContent: "center",
  },
  boxSearch: {
    flexDirection: "row" ,
    alignItems: "center",
    width: 260,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "white",
    marginRight: 40
    
},
  logo: {
      marginBottom:15,
      fontSize: 35,
  },
  inputStyle: {
    width: 200,
   
  },
  bag:{
      marginLeft: 58,
  }
});

export default styles;
