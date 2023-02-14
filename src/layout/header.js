import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import styles from './Header.module.css';

function Header() {
    return (
        <nav className={styles.nav}>
            <Link className={styles.logo} to='/'>
                <img src={logo} alt='Logo Kasa Header'></img>
            </Link>
            <div className={styles.links}>
                <NavLink to='/' className={({ isActive }) => isActive ? styles.activeClassName : undefined }>Accueil</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? styles.activeClassName : undefined }>À Propos</NavLink>
            </div>
        </nav>
    );
}

export default Header;