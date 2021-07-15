import api from "./api";

function create(email, userName, password, name, cpf, phoneNumber, birthDate) {
  return new Promise((resolve, reject) => {
    return api
      .post("/cliente", {
        email,
        userName,
        senha: password,
        nome: name,
        cpf,
        telefone: phoneNumber,
        dataNascimento: birthDate,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export default { create };
