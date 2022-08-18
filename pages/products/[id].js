import Layout from "../../components/Layout";
import axios from "axios";

const ProductView = () => {
  return (
    <Layout>
      <div>ProductView</div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const product = await axios.get(`http://localhost:3000/api/products/${id}`);
  console.log(product.data);
  return {
    props: {},
  };
};

export default ProductView;
