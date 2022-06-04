import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/cartSlice";
import GobackButton from "../GobackButton";
import ProductCount from "../ProductCount";
import ProductDescription from "../ProductDescription";
import SuccessSnackbar from "../SuccessSnackbar";

const ProductComponent = ({ product }) => {
  const { id, title, description, price, stock, image } = product;
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.product);

  const [showSuccessBar, setShowSuccessBar] = useState(false);

  const isInCart = (itemId) =>
    cartProduct?.some((cartItem) => cartItem.id === itemId);
  const handleAddToCart = (quantity) => {
    if (isInCart(id) || quantity === 0) return;

    addProduct(
      dispatch({
        ...product,
        quantity,
      })
    );
    setShowSuccessBar(true);
  };
  return (
    <>
      <Grid
        container
        mt={5}
        className="animate__animated animate__fadeIn"
        spacing={3}
      >
        <Grid
          item
          sm={6}
          md={4}
          className="animate__animated animate__fadeInLeft"
        >
          <Card raised>
            <CardMedia component="img" image={image} alt={id} />
          </Card>
          <Box
            display="flex"
            justifyContent="space-between"
            mt={1}
            alignContent="center"
          >
            <GobackButton />

            <Typography component="h5" variant="h6" textAlign="center">
              ${price}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Typography component="h3" textAlign="center" gutterBottom>
            {title}
          </Typography>
          <Divider />

          <ProductDescription characteristics={description} />
          <Divider sx={{ mb: 2 }} />

          <Box display="flex" justifyContent={"center"} my>
            {isInCart(id) ? (
              <Button
                variant="contained"
                color="error"
                startIcon={<AssignmentTurnedInIcon />}
                component={Link}
                to="/cart"
              >
                Go to cart
              </Button>
            ) : stock > 0 ? (
              <ProductCount stock={stock} onAdd={handleAddToCart} />
            ) : (
              <Typography variant="h6" color="textSecondary">
                Out of stock
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
      {showSuccessBar && <SuccessSnackbar message={"Product added to cart"} />}
    </>
  );
};

export default ProductComponent;
