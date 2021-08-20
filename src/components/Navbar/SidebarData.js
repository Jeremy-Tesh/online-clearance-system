import React from "react";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillDashboard />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Clearance progress",
    path: "/progress",
    icon: <FontAwesomeIcon icon="fa-duotone fa-spinner" />,
    cName: "nav-text",
  },
  {
    title: "Notification",
    path: "/notification",
    icon: <IoIcons.IoMdNotificationsOutline />,
    cName: "nav-text",
  },
];
