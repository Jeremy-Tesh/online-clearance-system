import React from "react";
import Navbar from "../Navbar";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Layout = ({ children, role }) => {
  const data = {
    student: [
      {
        id: 1,
        title: "Student",
        name: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillDashboard />,
        cName: "nav-text",
      },
      {
        id: 2,
        name: "Profile",
        path: "/profile",
        icon: <CgIcons.CgProfile />,
        cName: "nav-text",
      },
      {
        id: 3,
        name: "Notification",
        path: "./notification",
        cName: "nav-text",
        icon: <IoIcons.IoMdNotificationsOutline />,
      },
    ],

    staff: [
      {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillDashboard />,
        cName: "nav-text",
      },
      {
        id: 2,
        name: "Profile",
        path: "/profile",
        icon: <CgIcons.CgProfile />,
        cName: "nav-text",
      },
      {
        id: 3,
        name: "Notification",
        path: "/notification",
        cName: "nav-text",
        icon: <IoIcons.IoMdNotificationsOutline />,
      },
    ],

    officer: [
      {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillDashboard />,
        cName: "nav-text",
      },
      {
        id: 2,
        name: "Check queue list",
        path: "/queuelist",
        cName: "nav-text",
      },
      {
        id: 3,
        name: "Manage Property",
        path: "/property",
        cName: "nav-text",
      },
    ],

    admin: [
      {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillDashboard />,
        cName: "nav-text",
      },
      {
        id: 2,
        name: "Profile",
        path: "/profile",
        icon: <CgIcons.CgProfile />,
        cName: "nav-text",
      },
      {
        id: 3,
        name: "Register officer",
        path: "/registeration",
        cName: "nav-text",
      },
    ],
  };

  return (
    <div>
      <Navbar navItems={data.student} />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
