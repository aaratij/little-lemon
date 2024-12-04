import React from "react";
import style from "../styles/ReservationsForm.css";
import TimePicker from  "../common/TimePicker.js";
import Button from "../common/Button.js";

const ReservationForm = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();
        props.createBooking()
    };

    return (
        <div className={style.reservation_section}>
            <div className={style.reservation_content}>
                <div>
                    <p>Select from the available times and tell us how many guests will be coming.</p>
                    <p>Is it a special occasion? Please let us know and we will do all we can to make the event extra special!</p>
                </div>
                <form onSubmit={submitHandler} >
                    <div className={style.form_item}>
                        <label for="time">Available Times</label>
                        <TimePicker
                            availableTimes={props.availableTimes}
                            setReservation={props.setReservation}
                        />
                    </div>
                    <div className={style.form_item}>
                        <label for="guests">Number of Guests</label>
                        <input
                            value={props.reservation.guests}
                            onChange={(e) => props.setReservation(currentSelected => ({ ...currentSelected, guests: e.target.value }))}
                            type="number"
                            id="guests"
                            name="guests"
                            min="1"
                            max="8"
                            disabled={props.reservation.time === ""}
                            required />
                    </div>
                    <div className={style.form_item}>
                        <label for="occasion">Occasion</label>
                        <input
                            value={props.reservation.occasion}
                            onChange={(e) => props.setReservation(currentSelected => ({ ...currentSelected, occasion: e.target.value }))}
                            type="text"
                            disabled={props.reservation.time === ""}
                            id="occasion"
                            testid="occasion" />
                    </div>
                    <div>
                        <button type="Submit" className="btn" name="Submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReservationForm;