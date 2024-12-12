import "../App.css";
import { Link } from 'react-router-dom';
import bannerImg from "../images/gourmet.jpg";
import Specials from "./Specials.js";
function Header() {

    return (
        <>
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago </h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served
                        with a modern twist</p>
                    <Link to="/reservations"><button aria-label="On Click">Reserve Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImg} alt="Banner"/>
                </div>


            </section>
            </header>

            <Specials />
          </>
    );

}
export default Header;