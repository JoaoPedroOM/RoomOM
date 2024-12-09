import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import { Suspense } from "react";
import { lazy } from "react";
import Loading from "../components/global/Loading";

const Dashboard = lazy(() => import('../Pages/Dashboard'));

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<Loading/>}>
            <Dashboard />
          </Suspense>
        }
      />
    </Routes>
  );
}
