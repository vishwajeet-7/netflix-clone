import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../components/HomeScreen";
import Profile from "../components/screen/Profile";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AllRoutes;
