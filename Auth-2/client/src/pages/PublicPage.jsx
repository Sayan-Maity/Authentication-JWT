import axios from "axios";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PublicPage = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

//   useEffect(() => {
//     const verifyUser = async () => {
//       if (!cookies.jwt) {
//         navigate("/login");
//       } else {
//         const { data } = await axios.post(
//           `${process.env.REACT_APP_SERVER_URL}/auth`,
//           {},
//           {
//             withCredentials: true,
//           }
//         );
//         if (!data.status) {
//           removeCookie("jwt");
//           navigate("/login");
//         } else
//           toast(`Hi ${data.user} 🦄`, {
//             theme: "dark",
//           });
//       }
//     };
//     verifyUser();
//   }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <div>
      <h1>Public Page</h1>
      {!cookies.jwt? (<>Welcome Here</>) : (<button onClick={logOut}>Log out</button>)}
      <p>Go to <Link to="/">Private Page</Link> </p>
      
    </div>
  );
};

export default PublicPage;
