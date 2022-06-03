import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const LoadingSpinner = ({ text = "Loading..." }) => (
  <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
    <CircularProgress />
    <Typography variant="overline">{text}</Typography>
  </Box>
);

export default LoadingSpinner;
