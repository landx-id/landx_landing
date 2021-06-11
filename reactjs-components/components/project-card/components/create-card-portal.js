import React from 'react';
import ReactDOM from 'react-dom';
import { CardBase } from './card-base.js';

export const CreateCardPortal = (props) => {

    return (
        ReactDOM.createPortal(
        <div className="container">
            <div className="row">
                {CardBase(props)}
            </div>
        </div>

        , document.getElementById("card-base")
        )
    )
}
