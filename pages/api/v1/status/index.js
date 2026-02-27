import database from "infra/database.js";

async function estatus(request, response) {
  try {
    const result = await database.query("SELECT 1 + 1 as SUM;");
    return response.status(200).json({
      ok: true,
      query: result.rows,
    });
  } catch (erro) {
    console.log(erro);
  }
}
export default estatus;
