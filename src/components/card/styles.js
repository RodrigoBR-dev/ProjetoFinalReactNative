import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        marginBottom:10,
    },
    Card:{
        width:160,
        backgroundColor:'#fff',
        borderRadius:15,
        margin:7,
        justifyContent:"center",
        alignItems:'center',
        marginBottom:5,
       
    },
    Titulo:{
        fontWeight:'900',
    },
    Imagem:{
        width: 100,
        height: 100,
        borderRadius:20,
        // backgroundColor:'#1ECBE1',
    },
    Info:{
        
        fontSize:20,

    },
})
export default styles;