import React from 'react';
import { CardCarousel } from './card-carousel.js';
import { CardBody } from './card-body.js';
import { CardBodySoldImage } from './card-body-sold-image.js';
import "../stylesheets/card.css";

export const CardBase = (props) => {
    let cards = [];

    /* Take an array of landXProperty */
    for (let i = 0; i < props.length; i++) {
        cards.push(
            <div className="col-sm-12 col-md-6 col-xl-4" key={props[i].id}>
                <div className="card custom">
                    <CardCarousel
                        id={props[i].id}
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