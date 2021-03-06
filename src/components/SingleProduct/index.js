import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../../styles/images/not-found.png";
import "./singleProduct.scss";

const SingleProduct = ({ id, name, price, image }) => {
  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/product/${id}`);

  return (
    <Card raised>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          with="50"
          image={image ? image : NotFoundImage}
          alt={id}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" noWrap>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button size="small" color="error" onClick={handleNavigation}>
          View Details
        </Button>
        <Typography variant="subtitle2" color="text.secondary" align="right">
          {`$${price}`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
