import api from "./api";

function create(cliente, endEntrega, produto, quantidade) {
    return new Promise(async (resolve, reject) => {
        return api
            .post('/pedido', {cliente, endEntrega, produto, quantidade})
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

function update(numeroDoPedido, produto, quantidade) {
    return new Promise(async (resolve, reject) => {
        return api
            .put('/pedido', {numeroDoPedido, produto, quantidade})
            .then((response) => resolve(response))
            .catch((error) => reject(error))
    });
}

const apiPedido = {create, update};

export default apiPedido;