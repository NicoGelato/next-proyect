import Layout from "../components/Layout";
import axios from "axios";
import Link from "next/link";

const styles = {
  card: "card flex flex-col m-2 p-2 border-2 border-gray-400",
  button:
    "bg-blue-500 hover:bg-blue-700 active:bg-blue-500 text-white font-bold py-2 px-4 rounded-xs w-full mt-auto",
};

const Home = ({ products }) => {
  return (
    <Layout>
      <div className=" grid grid-cols-1 md:grid-cols-4">
        {products.map(({ id, name, price, description }) => (
          <div key={id} className={styles.card}>
            <h2 className="font-medium  text-3xl mt-0 mb-2 text-blue-600">
              {" "}
              {name}{" "}
            </h2>
            <p className="font-medium  text-2xl mt-0 mb-2 "> {description} </p>
            <p className="font-medium  text-2xl mt-0 mb-2 "> ${price} </p>
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
