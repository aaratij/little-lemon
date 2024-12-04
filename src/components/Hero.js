import {React} from "react";
import DatePicker from "../common/DatePicker.js";
import style from "../styles/Hero.css";


const Hero = (props) => {

  return (
    <div className={style.hero}>
      <div className={style.heroContent}>
        <h1>Reserve a Table</h1>
        <p>
          Pick a date to see our available times {" "}
        </p>
        <DatePicker setDate={props.setDate}/>
      </div>
      <img src="/images/restaurant.jpg" alt="" className={style.hero_image}/>
    </div>
  );
};

export default Hero;