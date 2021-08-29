import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import SidebarData from "./SidebarData";
import "./Style.css";
import { IconContext } from "react-icons/lib";
import { useAuth } from "../../contexts/AuthContext";

function Navbar({ navItems }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <IconContext.Provider value={{ color: "fff" }}>
        <div className="navbar">
          {" "}
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>title</p>
          <strong>Hello {currentUser.email}</strong>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {navItems.map((list, id) => {
              return (
                <li key={id} className={list.cName}>
                  <Link className="test" to={list.path}>
                    {list.icon}
                    <span>{list.name}</span>
                  </Link>
                </li>
              );
            })}

            {/* {SidebarData.map((item, id) => {
              return (
                <li key={id} className={item.cName}>
                  <Link className="test" to={item.path}>
                    {item.icon}
                    <span>{list.Student.name}</span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
