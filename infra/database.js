import { Client } from "pg";

async function query(objectQuery) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  try {
    const resultado = await client.query(objectQuery);
    return resultado;
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
