import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const [cookies] = useCookies(['jwt']); // Get the jwt cookie

  return cookies.jwt ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
