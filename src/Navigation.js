import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";

export default function Navigation() {
  return (
    <Switch>
      <Route component={HomePage} path="/" />
      <Redirect to="/" />
    </Switch>
  );
}
