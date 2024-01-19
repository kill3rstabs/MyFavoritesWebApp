// Dashboard.js

import { Box, Button, Paper } from "@mui/material";
import React from "react";

const Dashboard = () => {

    const handleNews = () => {
        console.log('Paper clicked!');
      }

      return (
    <Box>
      <Box
        color="primary.main"
        sx={{width: '300px',ml:50, mt:20 ,display: "flex", flexDirection: "Row", justifyContent:"space-between" }}
      >
        <Box sx={{width:'150px'}}>
        <Paper
        sx={{
          padding: '10px',
          backgroundColor: '#2196f3', // Set your desired background color
          color: 'white', // Set your desired text color
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#1565c0', // Change color on hover
          },
        }}
        onClick={handleNews}
      >
            Dashboard 1
          </Paper>
        </Box>

        <Box>
          <Paper sx={{}}>
            Dashboard 1
          </Paper>
        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;
