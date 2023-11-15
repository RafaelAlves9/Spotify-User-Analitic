import { LazyExoticComponent } from "react";
import { UserImports } from "../LazyImports/UserImports";

type TRoutePath = {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
};

export const UserDataPaths: TRoutePath[] = [
  {
    path: "/home",
    element: UserImports.Home
  },
  {
    path: "/",
    element: UserImports.Home
  },
];
