test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const body = await response.json();

  console.log(`Status recebido: ${response.status}`);
  console.log(JSON.stringify(body.query));
  expect(response.status).toBe(200);
});
