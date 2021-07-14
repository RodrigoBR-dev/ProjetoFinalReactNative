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
    } catch (e) {}
};

const obterToken = async () => {
    try{
        let token = await JSON.parse(await AsyncStorage.getItem("token"));
        if (token) {
            let currentDate = new Date().getTime();
            return token.expires <= currentDate ? logout() : token.value;
        }
    } catch(e) {}
}

const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userName');
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