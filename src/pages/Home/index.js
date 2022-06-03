import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductList from "../../components/ProductList";
import "./home.scss";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const productData = await axios.get(process.env.REACT_APP_GET_PRODUCTS);

        const products = productData.data;

        setProducts(products);

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getProducts();
  }, []);

  return loading ? (
    <LoadingSpinner text="Loading products..." />
  ) : (
    <ProductList products={products} />
  );
};
export default Home;
