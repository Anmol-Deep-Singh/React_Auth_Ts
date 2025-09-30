import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const IsLogin = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token"); 
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children; 
};
export default IsLogin;
