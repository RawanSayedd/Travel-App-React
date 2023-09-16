import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { click } from "@testing-library/user-event/dist/click";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const closeMobileMenu = () => {
    setClicked(false);
  };
  return (
    <>
      <nav className="navbar-items">
        <h1 className="navbar-logo" onClick={closeMobileMenu}>
          Trippy
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/signup">
            <button className="sign-up">SIGN UP</button>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
