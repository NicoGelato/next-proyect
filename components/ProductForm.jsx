import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const lebelNames = ["name", "price", "description"];

const styles = {
  container: "container w-full max-w-xs mx-auto",
  form: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
  input: "border border-gray-400 rounded-xs block w-full px-3 py-2 mb-2",
  button:
    "bg-blue-500 hover:bg-blue-700 active:bg-blue-500 text-white font-bold py-2 px-4 rounded-xs w-full mt-2",
};

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (router.query.id) {
      const res = await axios.put(`/api/products/${router.query.id}`, product);
      console.log(res);
      router.push("/");
    } else {
      const res = await axios.post("/api/products", product);
      console.log(res);
      router.push("/");
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setProduct({ ...product, [name]: value });

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${router.query.id}`);
      setProduct(data);
      // console.log(data);
    };

    if (router.query.id) {
      getProduct(router.query.id);
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {lebelNames.map((name, index) => (
          <div key={index}>
            <label htmlFor={name}>
              {" "}
              {name.charAt(0).toUpperCase() + name.slice(1)}:{" "}
            </label>
            <input
              className={styles.input}
              type="text"
              name={name}
              onChange={handleChange}
              value={product[name]}
            />
          </div>
        ))}

        <button className={styles.button}>
          {router.query.id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
