import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const GobackButton = () => {
  const navigate = useNavigate();
  const handleReturn = () => navigate(-1);

  return (
    <Button startIcon={<ArrowBackIcon />} onClick={handleReturn}>
      Back
    </Button>
  );
};
export default GobackButton;
