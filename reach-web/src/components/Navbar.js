import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { Box } from "@mui/material";

const Navbar = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", gap: 5}}>
        <a href="/">Home</a>
        <a href="/login">Login</a>

        {isUserLoggedIn && <a href="/account">Account</a>}
      </Box>
    </>
  );
};

export default Navbar;
