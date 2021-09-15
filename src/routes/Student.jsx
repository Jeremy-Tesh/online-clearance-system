import React from "react";
import Layout from "../components/Layout/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/StudentPage/Dashboard";
import Dash from "../pages/StudentPage/Dash";
import Profile from "../pages/StudentPage/Profile";
import Progress from "../components/ProgressBar/Progress";

const Student = () => {
  return (
    <Router>
      <Layout role="student">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/progress" component={Progress} />
          <Route exact path="/dash" component={Dash} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Student;
