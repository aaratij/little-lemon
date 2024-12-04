import { NavLink } from "react-router-dom";
import '../styles/Nav.css';
import Logo from '../images/Logo.svg';

function Nav() {
    return (
        <nav className="navigation">
            <ul>
                <li><NavLink to="/">{<img className="logo-img" src={Logo} alt="Little Lemon logo" />}</NavLink></li>
                <li><NavLink to="/" className="active-links">Home </NavLink></li>
                <li><NavLink to="/about" className="active-links" >About </NavLink></li>
                <li><NavLink to="/" className="active-links">Menu </NavLink></li>
                <li><NavLink to="/reservations" className="active-links">Reservations </NavLink></li>
                <li><NavLink to="/" className="active-links">Order Online </NavLink></li>
                <li><NavLink to="/" className="active-links" >Login </NavLink></li>
            </ul>
        </nav>

    );

}
export default Nav;