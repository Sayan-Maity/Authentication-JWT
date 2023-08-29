import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Logout from "../components/Logout";

export default function Cards() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  // useEffect(() => {
  //   const verifyUser = async () => {
  //     if (!cookies.jwt) {
  //       navigate("/login");
  //     } else {
  //       const { data } = await axios.post(
  //         `${process.env.REACT_APP_SERVER_URL}/auth`,
  //         {},
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       if (!data.status) {
  //         removeCookie("jwt");
  //         navigate("/login");
  //       } else
  //         toast(`Hi ${data.user} 🦄`, {
  //           theme: "dark",
  //         });
  //     }
  //   };
  //   verifyUser();
  // }, [cookies, navigate, removeCookie]);

  return (
    <>
      <div className="private">
        <Navbar/>
        <h1>Private Page</h1>
        <Logout/>
      </div>
      <ToastContainer />
    </>
  );
}
