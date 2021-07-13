import AsyncStorage  from "@react-native-community/async-storage"

const armazenarPedido = (nomeProduto,quantidade) => {
    AsyncStorage.setItem('nomeProduto', nomeProduto);
    AsyncStorage.setItem('quantidade',quantidade);
}

const buscaUser = async (user) => {
    return await AsyncStorage.getItem('user');
}

const buscaPedido = async (nomeProduto, quantidade) => {
    const nomeProduto = await AsyncStorage.getItem('nomeProduto'); 
    const quantidade = await AsyncStorage.getItem('quantidade'); 
    return [nomeProduto,quantidade];
}
export default {
    armazenarPedido,
    buscaPedido
}