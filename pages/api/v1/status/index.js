function status(request, response) {
  response.status(200).json({ chave: "Deu boa a requisição verifica pra mim" });
}
export default status;
