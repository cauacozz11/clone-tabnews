function login(username) {
  const users = ["maria", "marcos", "joao", "cauã", "duda", "adriana"];
  if (users.includes(username)) {
    return "Esse usuário está cadastrado em nosso sistema";
  } else {
    return "Usuário não está cadastrado em nosso sistema";
  }
}

exports.login = login;
