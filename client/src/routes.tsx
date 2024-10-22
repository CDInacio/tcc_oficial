import Home from "./pages/Home";
import { IRoute } from "./types/route";

export const privateRoutes: IRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
];
