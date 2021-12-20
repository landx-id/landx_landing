import React from 'react';
import { CardCarouselTarget } from './card-carousel-target.js';
import { CardCarouselInner } from './card-carousel-inner.js';

export const CardCarousel = (props) => {
    return (
        <div id={props.id} className="carousel slide" data-ride="carousel" data-interval="false">
            <ol className="carousel-indicators custom">
                <CardCarouselTarget
                    id={props.id}
                    totalImages={props.totalImages}
                />
            </ol>
            <CardCarouselInner previewImages={props.previewImages} />
        </div>
    );
}