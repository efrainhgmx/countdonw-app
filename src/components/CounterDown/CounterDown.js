import React from 'react';

import './style.css';

export const CounterDown = () => {

    const dateCountDown =  new Date("Jan 5, 2022 15:37:25").getTime();

    const TimeForDate  = () => {
        const dayNow = new Date().getTime();

        const distance = dateCountDown - dayNow;

        const days =  Math.floor( distance / (1000 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
 
    return (
        <div className="bg-container">
            <section  className="counterdown-wrapper">
                <div>
                    <span className="date" id="days">08</span>
                    <p>Días</p>
                </div>

                <div>
                    <span className="date" id="hours">10</span>
                    <p>Horas</p>
                </div>

                <div>
                    <span className="date" id="minutes">35</span>
                    <p>Minutos</p>
                </div>

                <div>
                    <span className="date" id="seconds">24</span>
                    <p>Segundos</p>
                </div>
            </section>
        </div>
    )
}
