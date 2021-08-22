import React from 'react';

import './style.css';

export const CounterDown = () => {

    const nextYear = new Date().getFullYear() + 1;

    const dateCountDown =  new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();

    const TimeForDate  = () => {
        const dayNow = new Date().getTime();

        const distance = dateCountDown - dayNow;

        let days =  Math.floor( distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(distance === 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }

        return {
            days,
            hours,
            minutes,
            seconds
        }

    }

    const { days, hours, minutes, seconds } = TimeForDate();

 
    return (
        <div className="bg-container">
            <h1>{ `Días faltantes para el año ${ nextYear }` }</h1>
            <section  className="counterdown-wrapper">
                <div>
                    <span className="date" id="days">{ (days < 10) ? `0${days}` : days  }</span>
                    <p>Días</p>
                </div>

                <div>
                    <span className="date" id="hours">{ (hours < 10) ? `0${hours}` : hours }</span>
                    <p>Horas</p>
                </div>

                <div>
                    <span className="date" id="minutes">{ (minutes < 10) ? `0${minutes}` : minutes }</span>
                    <p>Minutos</p>
                </div>

                <div>
                    <span className="date" id="seconds">{ (seconds < 10) ? `0${seconds}` : seconds }</span>
                    <p>Segundos</p>
                </div>
            </section>
        </div>
    )
}
