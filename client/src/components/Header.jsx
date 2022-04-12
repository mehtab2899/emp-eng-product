import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./scss/Header.scss";
import { NavItems } from "../data/NavItems";

const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  return (
    <div className={`header ${show && "header__bg"}`}>
      <h1 className="header__logo">
        <a href="/">
          Employee <br />
          <span>Engagement</span>
        </a>
      </h1>
      <nav className="header__nav">
        <ul className="header__nav--items">
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
