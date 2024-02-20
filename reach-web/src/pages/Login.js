import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { signIn, signUp } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setMessage("");

    try {
      const userCredential = await signIn(email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        setError("");
        setMessage("Success! Logging in...");
        setTimeout(() => {
          navigate("/"); // Navigate to the main page
        }, 2000);
      } else {
        setError(
          "Your email address is not verified. Please check your email to verify your account."
        );
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setError("");
    setMessage("");

    try {
      await signUp(email, password);
      setError("");
      setMessage(
        "Success! Account created. Please check your email for verification."
      );
      setTimeout(() => {
        setHasAccount(true);
        setMessage("");
        setError("");
        setEmail("");
        setPassword("");
      }, 3000);
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={12}>
          <h1>{hasAccount ? "Login" : "Create Account"}</h1>

          {error && <div className="alert alert-danger">{error}</div>}
        </Grid>

        <form>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password" // Add this line
            />

            {!hasAccount && (
              <TextField
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password" // Add this line
              />
            )}

            {hasAccount ? (
              <Button onClick={handleLogin}>Login</Button>
            ) : (
              <Button onClick={handleSignUp}>Create Account</Button>
            )}

            <Button onClick={() => setHasAccount(!hasAccount)}>
              {hasAccount
                ? "Don't have an account? Sign up"
                : "Have an account? Sign in"}
            </Button>
          </Box>
        </form>
      </Grid>
    </>
  );
};

export default Login;
