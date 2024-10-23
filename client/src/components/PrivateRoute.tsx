// PrivateRoute.jsx
import Navbar from "./drawer/navbar/Navbar";
import Drawer from "./drawer/Drawer";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = true;

  return (
    <>
      {isAuth ? (
        <div className="w-screen min-h-screen flex">
          <header>
            <Navbar />
          </header>
          <Drawer />
          <div className="flex-1 ml-60 pt-16 p-5 bg-background">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};

export default PrivateRoute;
