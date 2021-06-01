import React from 'react';
import ReactDOM from 'react-dom';
import { CardBase } from './card-base.js';

export const CreateCard = (props) => {
    ReactDOM.render(
        <div className="container">
            <div className="row">
                {CardBase(props)}
            </div>
        </div>

        , document.getElementById("card-base")
    );
}