import database from "../../../../infra/database.js";

async function status(request, response) {
  try {
    const result = await database.query("SELECT 1 + 1 as SUM;");
    console.log(result.rows);
    response
      .status(200)
      .json({ chave: "Deu boa a requisição verifica pra mim" });
  } catch (erro) {
    console.log(erro);
  }
}
export default status;
