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
            <div className="col-12 col-md-auto col-xl-3" key={i} onClick={() =>{
                // check for project page redirect.
                // we check if card project in homepage [landx.id] then we do normal redirect
                // and if card project shown in [landx.id/project] we do change the url properties symbol then reload page 
                // alert("dasd");
                // check if url doesnt have hash(#) path
                if (window.location.hash == "" ) {


                    // also check path url contains "project"
                    if (window.location.pathname.indexOf("project") >= 1) {
                    location.href = props[i].link; 
                    
                    location.reload();
                    }else{
                    location.href = props[i].link; 
                    }
                }
                else{
                    location.href = props[i].link; 
                    location.reload();
                }
                } }>
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