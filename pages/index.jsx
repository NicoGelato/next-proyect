import Layout from "../components/Layout";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSessionStorage from "../hooks/useSessionStorage";

const styles = {
  card: "card flex flex-col m-2 p-2 border-2 border-gray-400",
  title: "font-medium  text-3xl mt-0 mb-2 text-blue-600",
  p: "font-medium  text-2xl mt-0 mb-2 text-blue-600",
  button:
    "bg-blue-500 hover:bg-blue-700 active:bg-blue-500 text-white font-bold py-2 px-4 rounded-xs w-full mt-auto",
};

const ordenar = (arr) => {
  const ordenado = arr.sort((a, b) => {
    return a.price - b.price;
  });

  return ordenado;
};

const Home = ({ products }) => {
  const [productState, setProductState] = useState(products);

  const [storedValue, setValue] = useSessionStorage("products", products);

  const router = useRouter();

  const handleSort = () => {
    const ordenado = ordenar(products);
    console.log(ordenado);
    setValue(ordenado);
    setProductState(storedValue);
    router.push("/");

    // Averiguar que onda el sessionStorage con el getServerSideProps
  };

  useEffect(() => {
    setProductState(storedValue);
  }, [storedValue]);

  return (
    <Layout>
      <button onClick={() => handleSort()} className={styles.button}>
        Ordenar por precio
      </button>
      <div className=" grid grid-cols-1 md:grid-cols-4">
        {productState.map(({ id, name, price, description }) => (
          <div key={id} className={styles.card}>
            <h2 className={styles.title}> {name} </h2>
            <p className={styles.p}> {description} </p>
            <p className={styles.p}> $ {price} </p>
            <Link href={`/products/${id}`}>
              <a className={styles.button}>
                <button>Más detalles</button>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: {
      products,
    },
  };
};

export default Home;
