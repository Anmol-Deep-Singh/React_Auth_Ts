import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const IsLogin = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token"); 
  if (token === undefined || !token) {
    return <Navigate to="/auth" replace />;
  }

  return children; 
};

const IsLogout= ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token"); 
  if (!(token === undefined || !token)) {
    return <Navigate to="/" replace />;
  }

  return children; 
};
export {IsLogin,IsLogout};
