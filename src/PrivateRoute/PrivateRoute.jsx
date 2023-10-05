/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../Layout/Layout";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(DataContext);
  const {pathname} = useLocation()
 if(loading){
    return <div className="text-center my-[20%]"><span className="loading  loading-bars loading-lg"></span></div>
 }
  if (user) {
    return children;
  }

  return <Navigate state={pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
