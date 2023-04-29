import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../components/HomeScreen";
import Login from "../components/screen/Login";
import PrivateRoute from "../private/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomeScreen />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
