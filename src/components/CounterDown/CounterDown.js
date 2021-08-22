import React from 'react';

import './style.css';

export const CounterDown = () => {

    const dateCountDown =  new Date("Jan 5, 2022 15:37:25").getTime();

    const TimeForDate  = () => {
        const dayNow = new Date().getTime();

        const distance = dateCountDown - dayNow;

        let days =  Math.floor( distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        }

    }

    const { days, hours, minutes, seconds } = TimeForDate();
    console.log(days, hours, minutes, seconds);

 
    return (
        <div className="bg-container">
            <section  className="counterdown-wrapper">
                <div>
                    <span className="date" id="days">{ days }</span>
                    <p>Días</p>
                </div>

                <div>
                    <span className="date" id="hours">{ hours }</span>
                    <p>Horas</p>
                </div>

                <div>
                    <span className="date" id="minutes">{ minutes }</span>
                    <p>Minutos</p>
                </div>

                <div>
                    <span className="date" id="seconds">{ seconds }</span>
                    <p>Seconds</p>
                </div>
            </section>
        </div>
    )
}
