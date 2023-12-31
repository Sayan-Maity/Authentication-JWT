import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Private from "./pages/Private";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Private2 from "./pages/Private2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<Private />} />
        <Route path="/private2" element={<ProtectedRoute element={Private2} />} />
        {/* <ProtectedRoute path="/private2" element={<Private2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
