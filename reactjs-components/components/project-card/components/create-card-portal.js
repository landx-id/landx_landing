import React from 'react';
import ReactDOM from 'react-dom';
import { CardBasefilter } from './card-base-filter';

export const CreateCardPortal = (props) => {
    function prevPage() {
        props.prevPage();
    }

    function nextPage() {
        props.nextPage();
    }
    return (
        ReactDOM.createPortal(
        <div className="container">
            <div className="row">
                {CardBasefilter(props.project)}
            </div>

            <div className="row d-flex justify-content-center">
                <button className="btn btn-primary" onClick={prevPage}>Prev</button>
                <button className="btn btn-primary" onClick={nextPage}>Next</button>
            </div>
        </div>

        , document.getElementById("card-base")
        )
    )
}
