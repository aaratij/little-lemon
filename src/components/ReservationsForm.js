import React, { useState} from "react";


const ReservationForm = (props) => {
    const [date, setDate] = useState("");


    const [reservation, setReservation] = useState({
        guests: "1",
        occasion: "",
        time: "",
        date: ""
    });


    const handleSubmit = (e) => {

        e.preventDefault();
        const { name, value } = e.target;
        props.setReservation(prevState => ({
            ...prevState,
            [name]: value,
        }));
        props.SubmitForm(e, reservation);

    }

    const handleChangeInReservation = (e) => {
        const { name, value } = e.target;
        setReservation(prevState => ({
            ...prevState,
            [name]: value,
        }));
        if (name === "date") {
            setDate(e.target.value);
            props.dispatch(e);
        }

    }


    return (
        <header>
            <section>
                <form name="ResForm" onSubmit={handleSubmit}>
                    <fieldset>

                        <div>
                            <label htmlFor="date">Choose Date:</label>D:
                            <input id="date" name="date" value={reservation.date}
                                onChange={handleChangeInReservation}
                                type="date" required />
                        </div>


                        <div>
                            <label htmlFor="time">Choose Time:</label>
                            <select id="time" name="time" value={reservation.time} onChange={handleChangeInReservation}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes?.map(availableTimes => {
                                        return <option key =
                                            { availableTimes }> { availableTimes } </option>})
                                }
                            </select>
                         </div>


                        <div>
                            <label htmlFor="guests">Number of Guests:</label>
                            <input id="guests" name="guests" value={reservation.guests}
                                onChange={handleChangeInReservation}
                                type="number" min="1" max="10" required defaultValue="1" />
                        </div>


                        <div>
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" name="occasion" value={reservation.occasion}
                                onChange={handleChangeInReservation}>
                                <option value="">Select Ocassion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Engagement">Engagement</option>
                            </select>
                        </div>


                        <div className="btnReceive">
                            <input aria-label="On Click" className="" type="button"
                                value="Make your Reservation" onClick={(e) => handleSubmit(e)} />
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    );
}

export default ReservationForm;