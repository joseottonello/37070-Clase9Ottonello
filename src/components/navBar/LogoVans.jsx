import { NavLink } from "react-router-dom";
import { CardImg } from "reactstrap";
import logo from "../../assets/images/logo.jpg"
import styles from "./LogoVans.module.css";

const LogoVans = () => {

    return (
        <>
            <NavLink
            to="/">
                <CardImg
                className={styles.logo}
                alt="Vans Store"
                src={logo}
                />
            </NavLink>
        </>
    )
}

export default LogoVans