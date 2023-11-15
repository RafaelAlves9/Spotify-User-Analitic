import { lazy } from "react";

const UserImports = {
  Home: lazy(() => import("@pages/User/Home/Home")),
};

export { UserImports };