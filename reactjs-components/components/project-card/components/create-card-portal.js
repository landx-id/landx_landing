import React from 'react';
import ReactDOM from 'react-dom';
import { CardBasefilter } from './card-base-filter';

export const CreateCardPortal = (props) => {

    return (
        ReactDOM.createPortal(
        <div className="container">
            <div className="row">
                {CardBasefilter(props)}
            </div>
        </div>

        , document.getElementById("card-base")
        )
    )
}
