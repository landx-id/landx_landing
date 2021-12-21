import React, { useState } from 'react';
import spinner from '../../../../img/spinner.gif';

export const CardCarouselInner = (props) => {
    let carouselItem = [];
    const [loadImg, setLoadImg] = useState(true)

    const handleLoadImage = () => {
        setLoadImg(false)
    }

    for (let i = 0; i < props.previewImages.length; i++) {
        let path = props.previewImages[i];

        /* Set the first item to be active */
        if (i == 0) {
            carouselItem.push(
                <div className="carousel-item custom active" key={i}>
                    <img className={loadImg ? 'd-block mx-auto my-5' : 'd-block w-100'} style={loadImg ? { height: '40px', width: '40px !important' } : { '': '' }} src={loadImg ? spinner : path} loading='lazy' onLoad={() => handleLoadImage()} />
                </div>
            )
        } else {
            carouselItem.push(
                <div className="carousel-item custom" key={i}>
                    <img className={loadImg ? 'd-block mx-auto my-5' : 'd-block w-100'} style={loadImg ? { height: '40px' } : { '': '' }} src={loadImg ? spinner : path} loading='lazy' />
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