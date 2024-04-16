import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from "./route/routes";
import { observer } from "mobx-react-lite";
import { MAIN_ROUTE } from "./utils/consts";
import { Context } from "./index";

const AppRouter = observer(() => {
  const { store } = useContext(Context);
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
});

export default AppRouter;
