import IRoute from "../interfaces/route";
import { Character } from "../pages/Character";
import { Home } from "../pages/Home";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    exact: true,
  },
  {
    path: "/character/:id",
    name: "Character Details Page",
    component: Character,
    exact: true,
  },
];

export default routes;
