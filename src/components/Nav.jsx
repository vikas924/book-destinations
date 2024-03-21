import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaVimeoV,
  FaPinterestP,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "../stylesheets/nav.css";

const SideNav = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const [isNavVisible, setNavVisible] = useState(false);
  const toggleSidebar = () => {
    setNavVisible(!isNavVisible);
  };

  const renderLoginOrLogoutLink = () => {
    if (user && user !== null) {
      return (
        <li className="sidenav-item">
          <NavLink
            to="/logout"
            className="sidenav-link"
            onClick={toggleSidebar}
          >
            Logout
          </NavLink>
        </li>
      );
    }
    return (
      <li className="sidenav-item">
        <NavLink to="/" className="sidenav-link" onClick={toggleSidebar}>
          Login
        </NavLink>
      </li>
    );
  };

  return (
    <div className="nav-container d-flex flex-column align-items-center">
      <nav className="burger">
        <button
          type="button"
          aria-label="Navigation"
          className="toggle-button"
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu />
        </button>
      </nav>
      <nav className={`navi ${isNavVisible ? "show" : "hidden"}`}>
        <div className="logo-img">
          <img className="logo" src="/Trip.jfif" alt="logo" />
        </div>
        <ul className="sidenav-list d-flex flex-column justify-content-center align-items-center">
          <li className="sidenav-item">
            <NavLink
              to="/delete-destinations"
              className="sidenav-link"
              onClick={toggleSidebar}
            >
              Delete Destinations
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink
              to="/add-destinations"
              className="sidenav-link"
              onClick={toggleSidebar}
            >
              Add Destinations
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink
              to="/destinations"
              className="sidenav-link"
              onClick={toggleSidebar}
            >
              Destinations
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink
              to="/reservations"
              className="sidenav-link"
              onClick={toggleSidebar}
            >
              Reservations
            </NavLink>
          </li>
          {renderLoginOrLogoutLink()}
        </ul>
        <div className="sidenav-footer">
          <ul className="sidebar-socials">
            <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <BsTwitter />
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <FaFacebookF />
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <FaGooglePlusG />
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <FaVimeoV />
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <FaPinterestP />
              </NavLink>
            </li>
          </ul>
          <p className="copyright">
            <span>
              <AiOutlineCopyrightCircle />
            </span>
            2023 Travel Agency
          </p>
        </div>
      </nav>
    </div>
  );
};
export default SideNav;
