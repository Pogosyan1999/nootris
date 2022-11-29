import React, { useState } from "react";
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";
import styles from "./css/Navbar.module.css";
import media from "./css/Media.module.css";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        className={`${styles.btn} ${media.btn}`}
        onClick={() => setToggle(!toggle)}
      >
        <VscThreeBars />
      </button>
      <nav className={`${styles.nav} ${media.nav} ${toggle ? "active" : ""}`}>
        <ul>
          {NavbarItems.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
