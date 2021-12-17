import React from 'react';
import ReactDOM from 'react-dom';
import { CardBasefilter } from './card-base-filter';
import Carousel from 'react-elastic-carousel'

export const CreateCardPortal = (props) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 992, itemsToShow: 3 },
    ]

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
                    <Carousel breakPoints={breakPoints}>
                        {CardBasefilter(props.project)}
                    </Carousel>
                </div>

                <div className="row">
                    <div className="col d-flex flex-column flex-sm-row justify-content-center mx-5 mt-3 mt-xl-2">
                        <button className="btn btn-primary" onClick={prevPage}>Sebelumnya</button>
                        <button className="btn btn-primary mb-3 mb-sm-0" onClick={nextPage}>Selanjutnya</button>
                    </div>
                </div>
            </div>

            , document.getElementById("card-base")
        )
    )
}
