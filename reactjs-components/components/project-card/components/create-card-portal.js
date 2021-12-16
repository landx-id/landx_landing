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

                <div className="row">
                    <div className="col d-flex flex-column flex-sm-row justify-content-center mx-5">
                        <button className="btn btn-primary" onClick={prevPage}>Sebelumnya</button>
                        <button className="btn btn-primary mb-3 mb-sm-0" onClick={nextPage}>Selanjutnya</button>
                    </div>
                </div>
            </div>

            , document.getElementById("card-base")
        )
    )
}
