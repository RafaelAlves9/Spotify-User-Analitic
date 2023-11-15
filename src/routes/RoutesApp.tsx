import { Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Loading from "@shared/Loading/Loading";
import AuthRequiredRoutes from "./AuthRequiredRoutes";
import { DataPathImports } from "./DataPaths/DataPathImports";

const RoutesApp = () => {
  
  return (
    <Router>
      <Suspense fallback={<Loading isLoadingParam={true} />}>
        <Routes>

          {/* public routes */}
          {DataPathImports.CommonDataPaths.map((common, key) => (
            <Route
              key={key}
              path={common.path}
              element={<common.element />}
            />
          ))}
          
          {/* private user routes */}
          <Route element={<AuthRequiredRoutes roleRoute="user" />} >
            {DataPathImports.UserDataPaths.map((common, key) => (
              <Route
                key={key}
                path={common.path}
                element={<common.element />}
              />
            ))}
          </Route>

        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesApp;
