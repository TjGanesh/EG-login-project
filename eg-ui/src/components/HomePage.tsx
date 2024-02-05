import { Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Container sx={{display:"flex", justifyContent:'center', alignItems:"center", height:'100vh'}}>
    <Typography variant="h2">
         Welcome to Home page!, you have successfully logged in.
    </Typography>
      </Container>
    </>
  );
};

export default HomePage;
