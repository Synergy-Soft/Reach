import { Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const Account = () => {
  return (
    <>
    <Navbar />
      <Grid container>
        <Grid item lg={4} md={6} xs={12}>
          <h1>Account</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Account;
