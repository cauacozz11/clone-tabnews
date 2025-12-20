const calculadora = require("../../models/calculadora.js");

test("Validação de usuário", () => {
  const aluno = calculadora.login("cauã");
  expect(aluno).toBe("Usuário não está cadastrado em nosso sistema");
});
