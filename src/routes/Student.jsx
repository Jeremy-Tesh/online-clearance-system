import React from "react";
import Layout from "../components/Layout/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/StudentPage/Dashboard";
import Notification from "../pages/StudentPage/Notification";
import Profile from "../pages/StudentPage/Profile";
import Progress from "../components/ProgressBar/Progress";

const Student = () => {
  return (
    <Router>
      <Layout role="student">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/progress" component={Progress} />
          <Route path="/" component={Profile} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Student;
