import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    // Replace 'YOUR_LOGIN_API_ENDPOINT' with the actual endpoint URL for login
    const loginApiUrl = "YOUR_LOGIN_API_ENDPOINT";

    axios
      .post(loginApiUrl, data)
      .then((response) => {
        if (response.data.success) {
          navigate("/dashboard");
        } else {
          // Handle unsuccessful login
          console.log("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error during login:", error);
      });
  };

  const handleSignup = () => {
    try {
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{ m: -1, width: "1358px", minHeight: "612px", bgcolor: "#C1C8C4" }}
    >
      <Container sx={{ ml: "320px", pt: "100px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "50vw" }}>
          <Typography sx={{ mt: "20px" }}>Email</Typography>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Typography sx={{ mt: "20px" }}>Password</Typography>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            sx={{ mt: "30px" }}
            variant="contained"
            color="secondary"
            onClick={handleLogin}
          >
            Log In
          </Button>
          <Button
            sx={{ mt: "30px" }}
            variant="contained"
            color="secondary"
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
