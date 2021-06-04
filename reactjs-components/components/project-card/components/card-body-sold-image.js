import React from 'react';
import soldout from '../../../../img/habis-terjual.png';

export const CardBodySoldImage = (props) => {
    return (
        <div className="sold-banner">
            <img src={soldout} className="sold-image"/>
        </div>
    );
}