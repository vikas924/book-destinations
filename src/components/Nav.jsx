import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaGooglePlusG,
//   FaVimeoV,
//   FaPinterestP,
// } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
// import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "../stylesheets/nav.css";

const SideNav = () => {
  // const user = JSON.parse(localStorage.getItem("user")) || null;
  const [isNavVisible, setNavVisible] = useState(false);
  const toggleSidebar = () => {
    setNavVisible(!isNavVisible);
  };

  // const renderLoginOrLogoutLink = () => {
  //   if (user && user !== null) {
  //     return (
  //       <li className="sidenav-item">
  //         <NavLink
  //           to="/logout"
  //           className="sidenav-link"
  //           onClick={toggleSidebar}
  //         >
  //           Logout
  //         </NavLink>
  //       </li>
  //     );
  //   }
  //   return (
  //     <li className="sidenav-item">
  //       <NavLink to="/" className="sidenav-link" onClick={toggleSidebar}>
  //         Login
  //       </NavLink>
  //     </li>
  //   );
  // };

  return (
    <div className="container nav-container">
      <nav className={`logo-container ${isNavVisible ? "show" : "hidden"}`}>
        <div className="logo-img">
          <img className="logo" src="/logo.jpg" alt="logo" />
          <h1>ATREVES</h1>
        </div>

        <button
          type="button"
          aria-label="Navigation"
          className="toggle-button"
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu />
        </button>
      </nav>
    </div>
  );
};
export default SideNav;
