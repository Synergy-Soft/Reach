import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import {theme} from "../theme";
const Home = () => {
  // logic

  // jsx
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: "theme.palette.primary.main",
          }}>
          <Typography variant="h4">Your Gateway to Amplified Brand Exposure</Typography>
          <Button
            variant="contained"
            >
            Learn More
          </Button>
        </Box>
      </Grid>
      <Grid container>
        <Box
          sx={{
            backgroundColor: "#FFF1EE",
            marginLeft: "auto",
            marginRight: "32px",
            l: "16px",
            r: "16px",
            height: "40vh",
            width: "60vh",
          }}>
          <Typography
            sx={{
              color: "#FF7F63",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "Bold",
            }}>
            Reach
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
