import { Switch, Route } from "react-router-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/jogo" component={Game} exact />
    </Switch>
  );
};

export default Routes;
