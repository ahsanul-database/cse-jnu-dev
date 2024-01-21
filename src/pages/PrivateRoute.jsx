import { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(authContext);
  const location = useLocation();
//   if (loading) {
//     return <LoadingPage />;
//   }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
