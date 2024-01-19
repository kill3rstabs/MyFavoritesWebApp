// App.js

import React from "react";
import {
  Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Login from "./components/login";
import Dashboard from "./components/dashboard";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/dashboard/:id" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
