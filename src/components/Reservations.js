import { useState, useReducer, useCallback, useEffect } from 'react';
import AvailableTimesReducer from './AvailableTimesReducer.js';
import API from '../API/Api.js';
import style from '../styles/Reservations.css';
import Hero from './Hero.js';
import ReservationsForm from './ReservationsForm.js';
import ConfirmedReservation from './ConfirmedReservation.js';
import Footer from './Footer.js';

const Reservations = () => {
    const [date, setDate] = useState(null);

    const initialAvailableTimesState = {
        date: "",
        availableTimes: [],
    };

    const Reset = () => {
        setReservation({
            date: "",
            time: "",
            guests: 2,
            occasion: "",
            confirmed: false,
        })
    }

    const [availableTimes, dispatchAvailableTimes] = useReducer(AvailableTimesReducer, initialAvailableTimesState);
    const [reservation, setReservation] = useState({
        date: "",
        time: "",
        guests: 2,
        occasion: "",
        confirmed: false,
    });

    const updateTimes = useCallback(() => {
        API.fetchAPI(date).then((data) =>
            dispatchAvailableTimes({ type: 'setAvailableTimes', payload: { date: date, availableTimes: data } })
        );
    }, [date]);


    const submitForm = () => {
        if (reservation.date && reservation.time && reservation.guests) {
            const response = API.submitAPI(reservation);
            if (response) {
                setReservation((current) => ({ ...current, confirmed: true }));
            }
            console.log("Booking successful");
        } else {
            console.log("Booking failed");
        }
    };

    useEffect(() => {
        if (date && date !== reservation.date) {
            if (reservation.confirmed) {
                Reset();
            }
            setReservation((current) => ({ ...current, date: date }));
            updateTimes();
        }
    }, [date, reservation, updateTimes]);

    return (
        <>
        <div classname={style.page_container}>
            <main className={style.content_wrap}>
                <Hero setDate={setDate} />
                {!reservation.confirmed && (
                    <ReservationsForm
                        availableTimes={availableTimes}
                        setReservation={setReservation}
                        reservation={reservation}
                        createBooking={submitForm}
                    />
                )}
                {reservation.confirmed && <ConfirmedReservation reservation={reservation} />}

            </main>
        </div>

        <Footer/>
        </>
    );
};

export default Reservations;