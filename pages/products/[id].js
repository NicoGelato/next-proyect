import Layout from "../../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

const styles = {
  card: "card flex flex-col m-2 p-2 border-2 border-gray-400",
  title: "font-medium  text-3xl mt-0 mb-2 text-blue-600",
  p: "font-medium  text-2xl mt-0 mb-2 text-blue-600",
  delete: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    // "bg-red-700 hover:bg-red-500 active:bg-red-700 text-white font-bold py-2 px-4 rounded-xs w-full mt-auto",
  edit: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
};

const ProductPage = ({
  product: { id, name, price, description, createdAT: createdAt },
}) => {
  const router = useRouter();

  const handleDelete = async () => {
    await axios.delete(`/api/products/${id}`);
    router.push("/");
  };

  return (
    <Layout>
      <div className={styles.card}>
        <h2 className={styles.title}> {name} </h2>
        <p className={styles.p}> Fecha de creación: {createdAt} </p>
        <p className={styles.p}> Descripción: {description} </p>
        <p className={styles.p}> Precio: ${price} </p>
        <button className={styles.delete} onClick={() => handleDelete()}>
          Eliminar
        </button>
        <button
          className={styles.edit}
          onClick={() => router.push(`/products/edit/${id}`)}
        >
          Editar
        </button>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const { data: product } = await axios.get(
    `http://localhost:3000/api/products/${id}`
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
