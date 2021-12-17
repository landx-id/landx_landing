import React from 'react';
import { CardCarousel } from './card-carousel.js';
import { CardBody } from './card-body.js';
import "../stylesheets/card.css";

export const CardBasefilter = (props) => {
    let cards = [];


    for (let i = 0; i < props.length; i++) {
        cards.push(
            <div className="col-auto mx-auto mb-5" key={i} onClick={() => {
                // check for project page redirect.
                // we check if card project in homepage [landx.id] then we do normal redirect
                // and if card project shown in [landx.id/project] we do change the url properties symbol then reload page 
                // check if url doesnt have hash(#) path
                if (window.location.pathname.indexOf("project") >= 1) {
                    location.href = props[i].link;
                    location.reload();
                } else {
                    location.href = props[i].link;
                }
                window.scrollTo(0, 0);
            }}>
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