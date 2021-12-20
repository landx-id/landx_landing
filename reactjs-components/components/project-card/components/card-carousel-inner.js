import React, { useState } from 'react';

export const CardCarouselInner = (props) => {
    let carouselItem = [];
    const [loadImg, setLoadImg] = useState(true)

    const handleLoadImage = () => {
        console.log(loadImg)
        setLoadImg(false)
    }

    for (let i = 0; i < props.previewImages.length; i++) {
        let path = props.previewImages[i];

        /* Set the first item to be active */
        if (i == 0) {
            carouselItem.push(
                <div className="carousel-item custom active" key={i}>
                    {loadImg ? <center className='my-5'><div class="spinner-border text-success" role="status"><span class="sr-only">Loading...</span></div></center>
                        : <img className="d-block w-100" src={path} loading='lazy' onLoad={() => handleLoadImage()} />}
                </div>
            )
        } else {
            carouselItem.push(
                <div className="carousel-item custom" key={i}>
                    {loadImg ? <center className='my-5'><div class="spinner-border text-success" role="status"><span class="sr-only">Loading...</span></div></center>
                        : <img className="d-block w-100" src={path} loading='lazy' />}
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