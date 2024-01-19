import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Assuming 'name', 'email', and 'password' are the state variables holding your form data
    const data = {
      name: name,
      email: email,
      password: password,
    };

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL of your API
    const apiUrl = process.env.REACT_APP_API;

    // Make a POST request to the API using Axios
    axios
      .post(apiUrl, data)
      .then((response) => {
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error sending data to API:", error);
      });
  };

  return (
    <Box
      sx={{ m: -1, width: "1358px", minHeight: "612px", bgcolor: "#C1C8C4" }}
    >
      <Container sx={{ ml: "320px", pt: "100px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "50vw" }}>
          <Typography sx={{ mt: "20px" }}>Full Name</Typography>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
