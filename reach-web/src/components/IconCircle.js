import React from "react";
import { Box } from "@mui/material";

const IconCircle = ({ icon, margin }) => {
  return (
    <>
      <Box margin={margin} sx={{ backgroundColor: "white", width: 40, height: 40, borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</Box>
    </>
  );
};

export default IconCircle;
