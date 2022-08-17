import ProductForm from "../components/ProductForm";
import Nav from "../components/Nav";
import axios from "axios";

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

const Home = ({ products }) => {
  console.table(products);
  return (
    <div >
      <Nav />
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
        Home
      </h1>
      <ProductForm/>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
        Products{" "}
      </h1>
      {products.map(({id, name, price, description}) => (
        <div key={id}>
          <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600"> {name} </h2>  
          <p className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600"> {description} </p>
          <p className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600"> ${price} </p>

        </div>
      ))}
    </div>
  );
};
export default Home;
