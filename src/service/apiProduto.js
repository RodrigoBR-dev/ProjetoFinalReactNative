import api from './api';

function buscarTodosProduto(){
        return new Promise((resolve,reject) => {
        api.get(`/produto`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

function searchProductByName(product) {
    return new Promise((resolve, reject) => {
        api.get('/produto/' + product)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

function searchCategory(){
        return new Promise((resolve,reject) => {
        api.get(`/categoria`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function searchProductByCategory(nameCategory){
        return new Promise((resolve,reject) => {
        api.get(`/categoria/${nameCategory}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    buscarTodosProduto,
    searchProductByName,
    searchCategory,
    searchProductByCategory
}