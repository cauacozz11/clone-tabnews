function status(request, response) {
  response.status(200).json({
    status: "healthy",
    updated_at: new Date().toISOString(),
    message: "O sistema está operando normalmente.",
  });
}

export default status;
