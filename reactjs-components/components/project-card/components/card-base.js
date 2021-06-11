import React from 'react';
import { CardCarousel } from './card-carousel.js';
import { CardBody } from './card-body.js';
import { CardBodySoldImage } from './card-body-sold-image.js';
import "../stylesheets/card.css";

export const CardBase = (props) => {
    let cards = [];

    /* Take an array of landXProperty's values */
    for (let i = 0; i < props.length; i++) {
        cards.push(
            <div className="col-12 col-md-auto col-xl-3" key={i} onClick={() => location.href = props[i].link}>
                <div className="card custom">
                    <CardCarousel
                        id={`project-${i}`}
                        totalImages={props[i].previewImages.length}
                        previewImages={props[i].previewImages}
                    />
                    {CardBody(props[i])}
                </div>
            </div>
        );
    }

    return (cards);
}