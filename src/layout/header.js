import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <p>I am the Header</p>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>A propos</NavLink>
            <NavLink to='/logement'>Logement</NavLink>
        </nav>
    );
}

export default Header;