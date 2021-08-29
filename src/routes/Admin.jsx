import React from "react";
import Layout from "../components/Layout/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../pages/AdminPage/Dashboard";
import Profile from "../pages/AdminPage/Profile";
// import AdminPage from "../pages/AdminPage/AdminPage";

const Admin = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Admin;
