import React from 'react';
import ReactDOM from 'react-dom';
import { CardBase } from './card-base.js';

export const CreateCard = (props) => {

    /* This function takes an array of landXProperty's values
     * with additional properties:
     * fundingProgress, totalFunding, remainingDays,
     * link, and isSold. Each individual format
     * can be seen at /pages/project-card.js
     */

    ReactDOM.render(
        <div className="container">
            <div className="row">
                {CardBase(props)}
            </div>
        </div>

        , document.getElementById("card-base")
    );
}