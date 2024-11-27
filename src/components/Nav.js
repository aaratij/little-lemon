import { Link, Route, Routes } from "react-router-dom";
import About from './Header.js';
import Home from './Main.js';
import { ReactComponent as Logo } from '../images/Logo.svg'
import '../App.css';


function Nav() {
    return (
        <>


            <nav className="nav">
                <Logo />
            <Link to="/" className="nav-item">Home </Link>
            <Link to="/about" className="nav-item">About </Link>
            <Link to="/" className="nav-item">Menu </Link>
            <Link to="/" className="nav-item">Reservations </Link>
            <Link to="/" className="nav-item">Order Online </Link>
            <Link to="/" className="nav-item">Login </Link>
        </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/"  component={Home} />
                <Route path="/"  component={Home} />
                <Route path="/"  component={Home} />
                <Route path="/"  component={Home} />
            </Routes>
        </>

    );

}
export default Nav;