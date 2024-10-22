import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";

const DrawerLayout = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default DrawerLayout;
