import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["jwt"]); 

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };

  return <>{!cookies.jwt ? "" : <button onClick={logOut}>Log out</button>}</>;
};

export default Logout;
