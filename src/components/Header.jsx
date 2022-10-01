import React from "react";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../reducer/Context";
function Header({ navLinks }) {
  const [isNavActive, setIsNavActive] = useState(false);
  const { pathname } = useLocation();
  const { amount, haveAcount, theme, toggleTheme } = useGlobalContext();
  return (
    <header className="header">
      <div className="container">
        <i
          className={`nav__toggle ${
            isNavActive ? "fa fa-close active" : "fa fa-bars"
          }`}
          onClick={() => setIsNavActive(!isNavActive)}
        ></i>
        <div className={`header__nav ${isNavActive && "active"}`}>
          {navLinks.map((navLink, index) => {
            return (
              <Link
                key={index}
                className={`header__nav__link ${
                  pathname === navLink.path && "active"
                }`}
                to={navLink.path}
                style={{ animationDelay: `${index} * 0.1s` }}
                onClick={() => setIsNavActive(!isNavActive)}
              >
                {navLink.text}
              </Link>
            );
          })}
        </div>
        <Link to={"/"}>
          <h2 className="header__logo">YOLO</h2>
        </Link>
        <div className="header__icons">
          <div className="header__theme__icon" onClick={() => toggleTheme()}>
            {theme == "dark" ? <FaSun className="" /> : <FaMoon className="" />}
          </div>
          <Link to="/cart" className="header__shopping__cart__icon">
            <i className="fa fa-shopping-cart">
              {amount > 0 && <span>{amount}</span>}
            </i>
          </Link>
          <Link to="/profile" className="header__profile__icon">
            <i
              className={`fa fa-user ${haveAcount == "true" && "userFound"}`}
            ></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
