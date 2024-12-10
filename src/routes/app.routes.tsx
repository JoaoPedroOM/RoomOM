import { Route, Routes } from "react-router-dom"
import { Suspense } from "react";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import Loading from "../components/global/Loading";

export function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={
          <Suspense fallback={<Loading/>}>
            <Dashboard/>
          </Suspense>
          }/>
      </Routes>
    )
}