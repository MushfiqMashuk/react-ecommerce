import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductList from "../../components/ProductList";
import "./home.scss";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   * Fetching all the products
   */

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
    <Layout>
      <LoadingSpinner text="Loading products..." />
    </Layout>
  ) : (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};
export default Home;
