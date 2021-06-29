import { Route, Switch } from "react-router-dom";
import routes from "../config/route";

interface RouteProps {}

export const Routing: React.FC<RouteProps> = () => {
  return (
    <>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          );
        })}
      </Switch>
    </>
  );
};
