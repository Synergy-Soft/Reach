import { Grid, Typography } from "@mui/material";

const Login = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={4} md={6} xs={12}>
          <Typography variant="h4" color={"primary.main"}>Left</Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h4">Right</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
