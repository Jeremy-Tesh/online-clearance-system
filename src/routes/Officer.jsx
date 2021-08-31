import React from "react";
import Layout from "../components/Layout/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Property from "../components/property/property";

const Officer = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/property" component={Property} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Officer;
