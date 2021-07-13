import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
  },

  header: {
      flex:1,
      width: '100%',
  },

  textContainer: {
      flex: 1,
      width: '80%',
  },

  footer: {
      flex: 1,
      alignItems: 'center',
      width: '70%',
      justifyContent: 'space-around',
  },

  textImput: {
    height: 20,
    width: '100%',
    borderBottomWidth: 5,
    borderColor: 'black',
    marginBottom: 20,
  },

  button: {
      height: 40,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: '#F7C325',

  },
});

export default styles;