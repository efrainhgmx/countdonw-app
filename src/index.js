import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./components/App";

function time () {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

setInterval(time, 1000);