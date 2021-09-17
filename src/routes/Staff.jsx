import React from "react";
import Layout from "../components/Layout/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/StaffPage/Dashboard";
import Notification from "../pages/StaffPage/Notification";
import Profile from "../pages/StaffPage/Profile";
import Progress from "../components/ProgressBar/Progress";

const Staff = () => {
  return (
    <Router>
      <Layout role="staff">
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

export default Staff;
