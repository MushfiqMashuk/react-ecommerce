import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const cartQuantity = useSelector((state) => state.quantity);

  return (
    <>
      <Tooltip title="Add to cart">
        <IconButton
          sx={{ mx: 1 }}
          aria-label="Cart"
          size="large"
          color="inherit"
          component={Link}
          to="/cart"
        >
          <Badge badgeContent={cartQuantity} color="error">
            <ShoppingCartIcon sx={{ fontSize: 30 }} />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default CartWidget;
