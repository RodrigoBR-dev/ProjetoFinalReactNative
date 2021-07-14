import api from './api';
function buscarTodosProduto(nomeProduto){
        return new Promise((resolve,reject) => {
        api.get(`/produto`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });

}
function searchCategory(nomeCategory){
        return new Promise((resolve,reject) => {
        api.get(`/categoria`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });

}

export default{
    buscarTodosProduto,
    searchCategory
}