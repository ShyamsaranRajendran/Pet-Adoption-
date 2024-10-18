// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useUser } from "../context/UserContext.jsx";

// const PrivateRoute = ({ element, allowedRoles }) => {
//   const { user } = useUser();

//   if (!user) {
//     return <Navigate to="/" />; // Redirect to home if not authenticated
//   }

//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/" />; // Redirect to home if user doesn't have access
//   }

//   return element; // Render the element if access is allowed
// };

// export default PrivateRoute;

// components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PrivateRoute = ({ element }) => {
  const { user } = useUser();

  // Allow access to all users
  // You can remove the role checking logic to allow all access
  // if (!user) {
  //   return <Navigate to="/login" />; // Redirect to login if not authenticated
  // }

  return element; // Render the component if access is allowed
};

export default PrivateRoute;
