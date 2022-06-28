import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";
import styles from "./Navbar.module.css"
import CartWidget from "./CartWidget"
import LogoVans from "./LogoVans"
import FavWidget from "./FavWidget"
import LoginWidget from "./LoginWidget";


const NavBar = () => {

    return (
        <Navbar
        className={styles.navbar}
        light
        container="fluid">
          <div
          className={styles.logo}>
            <LogoVans />
          </div>
          <div
          className={styles.links}>
            <NavLink 
            className={styles.home}
            to="/">
              Home
            </NavLink>
            <NavLink 
            className={styles.category}
            to="/category/Skate">
              Skate
            </NavLink>
            <NavLink 
            className={styles.category}
            to="/category/Urban">
              Urban
            </NavLink>
            <NavLink 
            className={styles.category}
            to="/category/Sport">
              Sport
            </NavLink>
          </div>
          <div
          className={styles.widgets}>
            <FavWidget />
            <CartWidget/>
            <LoginWidget />
          </div>
        </Navbar>
    )
}

export default NavBar