// PrivateRoute.jsx
import Drawer from "./drawer/Drawer";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const PrivateRoute = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  const isAuth = user && token;

  return (
    <>
      {isAuth ? (
        <div className="w-screen min-h-screen flex">
          <header>
            <Navbar />
          </header>
          <Drawer />
          <div className="flex-1 ml-20 lg:ml-60 pt-16 p-5 bg-background">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
