import api from "./api";

function create(email, userName, senha, nome, cpf, telefone, dataNascimento) {
  return new Promise(async (resolve, reject) => {
    return api
      .post("/cliente", {email, userName, senha, nome, cpf, telefone, dataNascimento})
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export default { create };