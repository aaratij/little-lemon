import { Route, Routes, useNavigate } from 'react-router-dom';
import { useReducer, useState } from 'react';
import Header from "./Header.js";
import Reservations from "./Reservations.js";
import ConfirmedReservation from "./ConfirmedReservation.js";


function Main() {
    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        }

    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() > 0.5) {
                result.push(i + ':30');
            }
        }

        return result;
    }
    const submitAPI = function (formData) {
        return true;
    }
    const initialState = { availableTimes: fetchAPI(new Date()) }
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {

        return { availableTimes: fetchAPI(new Date()) };
    }

    const navigate = useNavigate("confirmed",useState);
    function submitForm(formData, reservation) {
        if (submitAPI(formData)) {

            navigate("/confirmed", {
                state: {
                    occasion: reservation.occasion, guests: reservation.guests,
                    date: reservation.date, time: reservation.time}
            });
        }
    }


    return (

            <Routes>
            <Route path="/" element={<Header/> }/>
            <Route path="/reservations" element={<Reservations availableTimes={state}
                dispatch={dispatch} SubmitForm={submitForm} />} />
            <Route path="/confirmed" element={<ConfirmedReservation />} />

            </Routes>


    );

}
export default Main;