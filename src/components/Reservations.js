import React, { useState } from 'react';
import ReservationsForm from "./ReservationsForm.js";

const Reservations = (props) => {
    const [reservation, setReservation] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "",
        confirmed: false,
    });



    return (
        <>
            <ReservationsForm availableTimes={props.availableTimes}
                dispatch={props.dispatch} SubmitForm={props.SubmitForm} setReservation={setReservation} reservation={reservation} />


        </>
    );
}

export default Reservations