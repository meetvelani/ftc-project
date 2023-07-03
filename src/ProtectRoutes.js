import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  if (sessionStorage.getItem("token")) {
    return children;
  }
  return <Navigate to={"/sign-in"} />;
};

export const PublicRoute = ({ children }) => {
  if (sessionStorage.getItem("token")) {
    return <Navigate to={"/"} />;
  }
  return children;
};
