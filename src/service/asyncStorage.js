import AsyncStorage  from '@react-native-async-storage/async-storage'

const armazenarPedido = (nomeProduto,quantidade) => {
    AsyncStorage.setItem('nomeProduto', nomeProduto);
    AsyncStorage.setItem('quantidade',quantidade);
}

const buscaUser = async (user) => {
    return AsyncStorage.getItem('user');
}

const buscaPedido = async (nomeProduto, quantidade) => {
    const nome = await AsyncStorage.getItem('nomeProduto'); 
    const quant = await AsyncStorage.getItem('quantidade'); 
    return [nome,quant];
}

const armazenaToken = async (token) => {
    try{
        let expires = new Date().getTime() + (3600000);
        AsyncStorage.setItem("token" , JSON.stringify({ 
            "value": token,
            "expires": expires
        }))
        console.log(token)
    } catch (e) {}
};

const obterToken = async () => {
    try{
        let token = await JSON.parse(AsyncStorage.getItem("token"));
        if (token) {
            let currentDate = new Date().getTime();
            return token.expires <= currentDate ? removeToken() : token.value;
        }
    } catch(e) {}
}

const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch(e) {}
  };


const armazenarUser = async (userName) => {
    try {
        await AsyncStorage.setItem("userName" , userName)
    } catch(e) {}
}

export default {
    armazenarPedido,
    buscaPedido,
    armazenaToken,
    obterToken,
    armazenarUser
}