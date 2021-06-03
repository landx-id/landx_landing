import React from 'react';

export const CardBodySoldImage = (props) => {
    return (
        <div className="sold-banner">
            <img src={`${props.relativePath}img/habis-terjual.png`} className="sold-image"/>
        </div>
    );
}