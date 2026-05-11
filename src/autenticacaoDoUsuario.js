const usuarios = [
  {
    id: 1,
    nome: "carlos",
    email: "carlos@carlos.com.br",
    senha: 111111,
    expirado: false,
  },
  {
    id: 2,
    nome: "cadu",
    email: "cadu@cadu.com.br",
    senha: 222222,
    expirado: false,
  },
  {
    id: 3,
    nome: "arthur",
    email: "arthur@arthur.com.br",
    senha: 333333,
    expirado: true,
  },
  {
    id: 4,
    nome: "mateus",
    email: "mateus@mateus.com.br",
    senha: 444444,
    expirado: false,
  },
];

export function fazerLogin(email, senha) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email) {
      if (usuarios[i].senha !== senha) {
        console.log("Senha incorreta");
        return "Senha incorreta";
      }

      if (usuarios[i].expirado === true) {
        console.log("Credencial Expirada renove suas credenciai");
        return "Credencial Expirada renove suas credenciais";
      }
      console.log("Login realizado com sucesso");
      return "Login realizado com sucesso";
    }
  }
  console.log("Usuário não encontrado");
  return "Usuário não encontrado";
}
