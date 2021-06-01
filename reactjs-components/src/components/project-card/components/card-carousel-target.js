import React from 'react';

export const CardCarouselTarget = (props) => {
    var dataTargets = [];

    for (var i = 0; i < props.totalImages; i++) {
        /* Set the first item to be active */
        if (i == 0) {
            dataTargets.push(
                <li data-target={'#' + props.id} data-slide-to={i} className="active" key={i}></li>
            );
        } else {
            dataTargets.push(
                <li data-target={'#' + props.id} data-slide-to={i} key={i}></li>
            );
        }
    }

    return dataTargets;
}