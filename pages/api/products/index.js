import { pool } from "../../../config/db";

const setProducts = async (req, res) => {
  const { name, description, price } = req.body;
  const [result] = await pool.query("INSERT INTO products SET ?", {
    name,
    description,
    price,
  });

  return res.status(200).json({
    name,
    price,
    description,
    id: result.insertId,
  });
};

const getProducts = async (req, res) => {
  console.log( req.query);
  const [result] = await pool.query("SELECT * FROM products");
  return res.status(200).json(result);
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await setProducts(req, res);
  }

  return res.status(200).json("Getting all products");
}
