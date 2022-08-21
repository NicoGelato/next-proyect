import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProduct(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    case "PUT":
      return await updateProduct(req, res);
    default:
      break;
  }
}

const getProduct = async (req, res) => {
  const { id } = await req.query;
  const [result] = await pool.query(`SELECT * FROM products WHERE id = ${id}`);

  return res.status(200).json(result[0]);
};

const deleteProduct = async (req, res) => {
  const { id } = await req.query;
  await pool.query(`DELETE FROM products WHERE id = ${id}`);

  return res.status(204).json();
};

const updateProduct = async (req, res) => {
  const { id } = await req.query;
  const { name, description, price } = req.body;
  try {
    await pool.query(
      'UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?',
      [name, description, price , id]
    );

    return res.status(204).json();
  } catch (error) {
    console.error(error.message);
    console.error("Te equivocaste");
  }
};
