import React from "react";
import { YouTube } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import IconCircle from "../IconCircle";

const CampaignCard = ({ icon }) => {
  return (
    <>
      <Box sx={{ maxWidth: 250, maxHeight: 350, borderRadius: 3, border: 2.5 }}>
        <Box sx={{ backgroundColor: "red", height: 125, display: "flex", flexDirection: "column", justifyContent: "end", borderRadius: 2, borderEndEndRadius: 0, borderEndStartRadius: 0, borderBottom: 2 }}>
          <Box margin={1} sx={{ backgroundColor: "white", width: 40, height: 40, borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "orange", display: "flex", flexDirection: "column", height: "100%"}}>
            <Typography variant="h5">News Feed</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nis</Typography>
            <Button variant="contained" fullWidth>View</Button>
        </Box>
      </Box>
    </>
  );
};

export default CampaignCard;
