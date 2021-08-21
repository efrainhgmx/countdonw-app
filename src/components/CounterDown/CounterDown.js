import React from 'react';

import './style.css';

export const CounterDown = () => {
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
