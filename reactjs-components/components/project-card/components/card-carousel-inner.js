import React from 'react';

export const CardCarouselInner = (props) => {
    let carouselItem = [];

    for (let i = 0; i < props.previewImages.length; i++) {
        /* Set the first item to be active */
        if (i == 0) {
            carouselItem.push(
                <div className="carousel-item custom active" key={i}>
                    <img className="d-block w-100" src={props.previewImages[i]}/>
                </div>
            )
        } else {
            carouselItem.push(
                <div className="carousel-item custom" key={i}>
                    <img className="d-block w-100" src={props.previewImages[i]}/>
                </div>
            );
        }
    }

    return (
        <div className="carousel-inner">
            {carouselItem}
        </div>
    );
}