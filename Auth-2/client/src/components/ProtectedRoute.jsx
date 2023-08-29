import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['jwt']); // Get the jwt cookie

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
//         }
//       }
//     };
//     verifyUser();
//   }, [cookies, navigate, removeCookie]);

  return cookies.jwt ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
