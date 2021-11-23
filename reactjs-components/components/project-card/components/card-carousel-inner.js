import React from 'react';

export const CardCarouselInner = (props) => {
    let carouselItem = [];

    for (let i = 0; i < props.previewImages.length; i++) {
        let temp = props.previewImages[i].split("/");
        temp[(temp.length - 1)] = "lite/" + temp[(temp.length - 1)];
        let path = temp.join("/");
        
        /* Set the first item to be active */
        if (i == 0) {
            carouselItem.push(
                <div className="carousel-item custom active" key={i}>
                    <img className="d-block w-100" src={path}/>
                </div>
            )
        } else {
            carouselItem.push(
                <div className="carousel-item custom" key={i}>
                    <img className="d-block w-100" src={path}/>
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