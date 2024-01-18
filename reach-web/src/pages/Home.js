import React, { useState } from "react";
import { Grid, Box, Typography, Button, Card, CardHeader, CardContent, CardActionArea } from "@mui/material";
import CampaignCard from "../components/Cards/CampaignCard";
import { YouTube } from "@mui/icons-material";

const Home = () => {
  // logic

  // jsx
  return (
    <Grid container>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: 5 }}>
        <Box>
          <Typography variant="h3">
            Your Gateway to<br></br> Amplified Brand Exposure
          </Typography>
          <Button variant="contained">Learn More</Button>
        </Box>

        <Box>
          <CampaignCard icon={<YouTube/>} />
        </Box>
      </Box>
    </Grid>
  );
};

export default Home;
