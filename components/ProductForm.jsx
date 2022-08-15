import axios from 'axios';

const ProductForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/products', {
            name: "Product Name",
            description: "Product Description",
            price: 1000
        })
        console.log(res);
    }
  return (
    <div className="bg-gray-200 p-2">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />

        <label htmlFor="price">Price: </label>
        <input type="text" id="price" />

        <label htmlFor="description">Description: </label>
        <input type="text" id="description" />

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3">
          Save Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
