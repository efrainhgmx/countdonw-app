import React from 'react';

import './style.css';

export const CounterDown = () => {
    return (
        <div className="bg-container">
            <section  className="counterdown-cointainer">
                <div>
                    <span className="date">08</span>
                    <p>Días</p>
                </div>

                <div>
                    <span className="date">10</span>
                    <p>Horas</p>
                </div>

                <div>
                    <span className="date">35</span>
                    <p>Minutos</p>
                </div>

                <div>
                    <span className="date">24</span>
                    <p>Segundos</p>
                </div>
            </section>
        </div>
    )
}
