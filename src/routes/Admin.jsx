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
import Registration from "../pages/AdminPage/Registration";
// import AdminPage from "../pages/AdminPage/AdminPage";

const Admin = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/registration" component={Registration} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Admin;
