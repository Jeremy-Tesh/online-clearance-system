import React from "react";
import Layout from "../components/Layout/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../pages/StudentPage/Dashboard";
import Profile from "../pages/StudentPage/Profile";
import Status from "../pages/StudentPage/Status";
// import StudentPage from "../pages/StudentPage/AdminPage";

const Admin = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/progress" component={Status} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Admin;
