// src/routes/ProtectedRoute.tsx
import React from "react";
import { Outlet } from "react-router";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { type RootState } from "../app/store";

const ProtectedRoute: React.FC = () => {
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  // const location = useLocation();

  // if (!isAuthenticated) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;
