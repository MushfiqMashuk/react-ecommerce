import Grid from "@mui/material/Grid";
import SingleProduct from "../SingleProduct";

/**
 * Mapping all the single products in this component
 * @param {object} param0
 */

const ProductList = ({ products }) => (
  <>
    <Grid container spacing={4} py={3}>
      {products?.map((product) => (
        <Grid item xs={12} sm={6} lg={3} key={product.id}>
          <SingleProduct {...product} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default ProductList;
