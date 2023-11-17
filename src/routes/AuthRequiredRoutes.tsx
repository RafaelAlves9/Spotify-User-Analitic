import { useEffect } from "react";
import { getLocalStorageProperty } from "@utils/getLocalStorageProperty";
import { Navigate, Outlet } from "react-router-dom";

type props = {
  roleRoute: string;
};

const AuthRequiredRoutes = ({ roleRoute }: props) => {
  const token = getLocalStorageProperty("application", "token");

  const isAuthorized = () => {
    if (token) {
      return true;
    } else {
      return false;
    };
  };

  useEffect(() => {
    isAuthorized();
  }, [token]);

  if (isAuthorized()) {
    return <Outlet />;
  } else {
    return <Navigate to="/not-autorization"/>;
  };
};

export default AuthRequiredRoutes;