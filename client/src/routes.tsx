import Home from "./pages/Home";
import Patients from "./pages/Patients";
import { IRoute } from "./types/route";

export const privateRoutes: IRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pacientes",
    element: <Patients />,
  },
  {
    path: "/agendamentos",
    element: <Home />,
  },
  {
    path: "/usuarios",
    element: <Home />,
  },
];
