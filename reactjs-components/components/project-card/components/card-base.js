import React from 'react';
import { CardCarousel } from './card-carousel.js';
import { CardBody } from './card-body.js';
import "../stylesheets/card.css";

export const CardBase = (props) => {
    let cards = [];

    /* Take an array of landXProperty's values */
    $.getJSON("/lottie/upcoming.json", function(dataUpcoming) {
        let temp = [];
        const now = Date.now();
        
        dataUpcoming.upcoming.forEach(val => {
          let key = Object.keys(val);
          let listing_at = new Date(val[key].listing_at).getTime();
          
          if(listing_at > now){
            temp.push(val[key]);
          }
        });
      
        if(temp.length > 0){
      
            let limit = temp.length > 4 ? (temp.length - 4) : 0;
            
            for(let i = temp.length - 1; i >= limit; i--){
              let expiredAt = new Date(temp[i].listing_at).getTime(); //convert date and time to unix time
              let distance = expiredAt - now;
                cards.push(
                <div class="col-auto mx-auto mb-5" onClick={() => {
                    location.href = temp[i].link; 

                    }}>
                    <div class="card custom">
                        <img class="thumnail" src={"/lp/"+temp[i].images[0]}/>
                        <img class="label-soon" src="/img/soon-listing.png"/>
                        <h5 class="title-thumnail">{temp[i].title}</h5>
                    <div class="canv">
                        <span class="count-down-thumnail text-count-down-thumnail">{Math.floor(distance / (1000 * 60 * 60 * 24))} Hari : {Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} Jam</span>
                    </div>
                    <p class="detial-thumnail">PELAJARI LEBIH LANJUT</p>
                    </div>
              </div>
                );
            }
        }

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
      });

    

    return (cards);
}