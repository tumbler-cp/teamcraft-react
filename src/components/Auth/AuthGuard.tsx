import axios from "axios"
import { ReactNode } from "react";
import { Navigate } from "react-router-dom"

const isAuthenticated = () => {
  if (localStorage.getItem('teamcraft_token') !== null) {
    axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('teamcraft_token')}`;
    return true;
  }
  return false;
}

const AuthGuard: React.FC<{children: ReactNode}> = ({children}) => {
  return isAuthenticated() ? <div>{children}</div> : <Navigate to={"/signin"}/>
}

export default AuthGuard;