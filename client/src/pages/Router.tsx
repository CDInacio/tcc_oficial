import PrivateRoute from "@/components/PrivateRoute";
import { privateRoutes } from "@/routes";
import type { IRoute } from "@/types/route";
import { Route, Routes } from "react-router-dom";
import Signin from "./Signin";

const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        {privateRoutes.map((route: IRoute, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default Router;
