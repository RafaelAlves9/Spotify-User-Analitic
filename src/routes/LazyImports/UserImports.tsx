import { lazy } from "react";

const UserImports = {
  Home: lazy(() => import("@pages/User/TopArtists/TopArtists")),
};

export { UserImports };