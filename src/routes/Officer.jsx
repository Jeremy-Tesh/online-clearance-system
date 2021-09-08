import React from "react";
import Layout from "../components/Layout/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Property from "../components/property/property";
import QueueList from "../pages/OfficerPage/QueueList";
import Dashboard from "../pages/OfficerPage/Dashboard";

const Officer = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/property" component={Property} />
          <Route exact path="/queuelist" component={QueueList} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Officer;
