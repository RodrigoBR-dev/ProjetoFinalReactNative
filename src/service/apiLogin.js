import api from "./api";

function logar(userName, senha) {
  return new Promise((resolve, reject) => {
    return api
      .post("/login", { userName, senha })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function recebeToken(cpf) {
  return new Promise((resolve, reject) => {
    return api
      .post("/cliente/recupera/" + cpf)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function atualizarSenha(token) {
  return new Promise((resolve, reject) => {
    return api
      .put("/cliente/recupera?token=" + token)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export default {
  logar,
  recebeToken,
  atualizarSenha,
};
