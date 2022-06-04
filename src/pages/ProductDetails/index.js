import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductComponent from "../../components/ProductComponent";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await axios.get(
          `${process.env.REACT_APP_GET_PRODUCTS}/${productId}`
        );
        const data = productData.data;
    
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    getProduct();
  }, [productId]);

  return product ? <ProductComponent product={product} /> : <LoadingSpinner />;
};

export default ProductDetails;
