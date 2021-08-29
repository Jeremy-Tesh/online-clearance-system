import React from "react";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./index";

function SidebarData() {
  const data = [
    {
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
          path: "/notification",
          icon: <IoIcons.IoMdNotificationsOutline />,
          cName: "nav-text",
        },
      ],
    },
    {
      id: 2,
      title: "Staff",
      routeName: "staff",
      menus: [
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
        },
      ],
    },
    {
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
        },
        {
          id: 3,
          name: "Manage Property",
          path: "/property",
        },
      ],
    },
    {
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
        },
      ],
    },
  ];
  const menu = data.map((list, id) => {
    console.log("nav-bar");
    <Navbar key={id} list={list} />;
  });
  return <div>{menu}</div>;
}
export default SidebarData;
