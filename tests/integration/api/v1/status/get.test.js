const alunos = require("../../../../../models/calculadora.js");

test("GET to /api/v1/status should return 200", () => {
  const resultado = alunos.login("cauã");
  expect(resultado).toBe("Esse usuário está cadastrado em nosso sistema");
});
