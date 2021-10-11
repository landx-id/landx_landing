import React from 'react';
import ReactDOM from 'react-dom';
import { CardBase } from './card-base.js';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
 
export const CreateCard = (props) => {

    /* This function takes an array of landXProperty's values
     * with additional properties:
     * fundingProgress, totalFunding, remainingDays,
     * link, and isSold. Each individual format
     * can be seen at /pages/project-card.js
     */
    

    ReactDOM.render(
        <div className="container">
            <div className="row align-center">
            
            <Carousel breakPoints={breakPoints} >
                {CardBase(props)}
            </Carousel>
            </div>
        </div>

        , document.getElementById("card-base")
    );
}