import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <div>{cookies.jwt ? <button onClick={logOut}>Log out</button> : ""}</div>
  );
};

export default Logout;
