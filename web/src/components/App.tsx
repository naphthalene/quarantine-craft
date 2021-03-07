import NotFound from "./NotFound";
import theme from "../theme";
import Economy from "./qcraft/Economy";
import FAQ from "./qcraft/FAQ";
import Home from "./qcraft/Home";
import McMMO from "./qcraft/McMMO";
import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { HashRouter, Switch, Route } from "react-router-dom";
import { default as Layout, RouteSpec } from "./Layout";

const ROUTES: Array<RouteSpec> = [
  {
    to: "/",
    label: "Home",
    exact: true,
    external: false,
    component: <Home />,
  },
  {
    to: "/faq",
    label: "FAQ",
    exact: false,
    external: false,
    component: <FAQ />,
  },
  {
    to: "/economy",
    label: "Economy (Beta)",
    exact: false,
    external: false,
    component: <Economy />,
  },
  /* {
   *   to: "/mmo",
   *   label: "MMO (Beta)",
   *   exact: false,
   *   external: false,
   *   component: <McMMO />,
   * }, */
  {
    to: "/atlas/",
    label: "Atlas",
    external: true,
  },
];

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <HashRouter>
        <Layout routes={ROUTES}>
          <Switch>
            {ROUTES.filter(({ external }) => !external).map(
              ({ to, exact, component, label }) => (
                <Route path={to} exact={exact} key={label}>
                  {component}
                </Route>
              )
            )}
            <Route path="*" key="default">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
