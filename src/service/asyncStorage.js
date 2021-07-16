import AsyncStorage  from '@react-native-async-storage/async-storage'

const armazenarEstoque = (nomeProduto,quantidade) => {
    AsyncStorage.setItem(nomeProduto, quantidade);
};

const obterEstoque = async (nomeProduto) => {
    return AsyncStorage.getItem(nomeProduto);
};

const armazenarNumeroPedido = async (pedido) => {
    try{
        AsyncStorage.setItem('Pedido', pedido)
    } catch(e) {console.log(e)}
};

const obterNumeroPedido = async () => {
    return AsyncStorage.getItem('Pedido')
};

const armazenarToken = async (token) => {
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
};

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
};

const getUser = async () => {
    return AsyncStorage.getItem('userName');
};

const removeUser = async () => {
    AsyncStorage.removeItem('userName');
}

const removerNumeroPedido = () => {
    AsyncStorage.removeItem('Pedido');
}

const storeFavorite = (favorite) => {

    AsyncStorage.setItem("favorite", favorite)
}

const getFavorite = () => {
   return AsyncStorage.getItem("favorite")

}
export default {
    armazenarEstoque,
    obterEstoque,
    armazenarNumeroPedido,
    obterNumeroPedido,
    armazenarToken,
    obterToken,
    armazenarUser,
    storeFavorite,
    getFavorite,
    getUser,
    removerNumeroPedido,
    removeUser
}