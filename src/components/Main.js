import { NavLink } from 'react-router-dom';
import "../styles/Main.css";
import MainImage from "../images/gourmet.jpg"

function Main() {
    return (
        <div className="main-section-background">
            <div className="main-section-container">
                <div className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
                </div>
                <div className="section-right">
                    <div className="image-box">
                        <img src={MainImage} alt="Serving delicious dish" />
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Main;