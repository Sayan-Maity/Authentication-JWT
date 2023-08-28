import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
// import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./component/ProtectedRoute";
import DemoPublic from "./pages/DemoPublic";
import DemoPublic2 from "./pages/DemoPublic2";
import DemoPrivate from "./pages/DemoPrivate";
import DemoPrivate2 from "./pages/DemoPrivate2";
export default function App() {
  return (
    // <Toaster>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demoPublic" element={<DemoPublic />} />
          <Route path="/demoPublic2" element={<DemoPublic2 />} />
          <Route path="/" element={<ProtectedRoute element={DemoPrivate} />} />
          <Route path="/demoPrivate2" element={<ProtectedRoute element={DemoPrivate2} />} />
        </Routes>
      </BrowserRouter>
    //  </Toaster> 
  );
}
