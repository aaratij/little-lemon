import React from "react";
import { useLocation } from "react-router-dom"

const ConfirmedReservation = (props) => {
    //Object.keys(props).forEach(e => console.log(`key=${e}  value=${props[e]}`));
    const { state } = useLocation();
    const { occasion, guests, date, time } = state;
    console.log("Ocassion" + occasion + " GUESTS: " + guests);
    return (

        <div className="confirm">
            <div>
                   <h1>Booking has been <span>confirmed</span></h1>
                    <ul>
                        <li>Reservation Date: {date} </li>
                        <li>Time: {time} </li>
                        <li>Number of Guests: {guests} </li>
                        <li>Occasion:  {occasion}</li>
                    </ul>
             </div>
        </div>


    );
};

export default ConfirmedReservation;