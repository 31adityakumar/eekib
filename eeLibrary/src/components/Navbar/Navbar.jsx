import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEvent } from "../../Hooks/useEvent";
import styles from "./Navbar.module.scss";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggleValue) => !prevToggleValue);
  };

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEvent("scroll", changeToggle);
  return (
    <nav
      className={toggle ? `${styles.navbar} ${styles.expanded}` : styles.navbar}
    >
      <Link className={styles.left} to="/">
        <img
          src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1718341484/Screenshot_2024-06-14_103145-removebg-preview_jxojos.png"
          alt="logo"
        />
      </Link>
      <div className={styles.right}>
        <button className={styles.toggleIcon} onClick={handleToggle}>
          {toggle ? (
            <Icon icon="maki:cross" width="37"></Icon>
          ) : (
            <Icon icon="charm:menu-hamburger" width="37" height="37"></Icon>
          )}
        </button>
        <div className={styles.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
            to="/"
          >
            Home
          </NavLink>
          <NavHashLink
            className={styles.navlinks}
            activeClassName={styles.active}
            smooth
            to="#about"
          >
            About
          </NavHashLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
            to="/material"
          >
            Material
          </NavLink>
          <NavHashLink
            className={styles.navlinks}
            activeClassName={styles.active}
            smooth
            to="#contact"
          >
            Contact
          </NavHashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
