import React from "react";
import { Link, useLocation } from "react-router-dom";
function Footer({ navLinks }) {
  const { pathname } = useLocation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <h2 className="footer__logo">YOLO</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            praesentium ipsa nisi dolores ad expedita perspiciatis minus et sunt
            aut magnam harum, labore sapiente quo. Adipisci quod et quisquam
            veritatis?
          </p>
        </div>
        <div className="quick__links">
          <div className="footer__links">
            <h3>Quick Links</h3>
            {navLinks.map((navLink, index) => {
              return (
                <Link
                  key={index}
                  className={`footer__link ${
                    pathname === navLink.path && "active"
                  }`}
                  to={navLink.path}
                >
                  {navLink.text}
                </Link>
              );
            })}
          </div>
          <div className="footer__links">
            <h3>Contact Us</h3>
            <a href="">+02 01142 366 716</a>
            <a href="">+02 01019 135 059</a>
            <a href="">abdogoda0a@gmail.com</a>
            <a href="">70 Alqudos st, Elsalam City, Cairo Egypt</a>
            <div className="social__icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-linkedin"></i>
              <i className="fa fa-github"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
