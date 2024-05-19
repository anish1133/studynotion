import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {Routes,Route } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import PrivateRoute from './components/PrivateRoute';

function App() {

  const [isLoggedIn, setIsLoggedIn]=useState(false);

  return (
    <div className="App w-screen  h-screen bg-richblack-900 flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          }></Route>
        </Routes>
    </div>
  );
}

export default App;
