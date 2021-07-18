import api from "./api";

function create(cep, nome, cliente, numero, complemento) {
  return new Promise(async (resolve, reject) => {
    return api
      .post("/endereco", {cep, nome, cliente, numero, complemento})
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export default { create };