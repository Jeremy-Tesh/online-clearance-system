import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import Layout from "../../components/Layout/index";

const AdminPage = () => {
  return (
    <>
      <Layout>
        <AccountCircleIcon />
        <DashboardIcon />
        <PeopleOutlineIcon />
        <p>ADMIN PAGE</p>
      </Layout>
    </>
  );
};
export default AdminPage;
