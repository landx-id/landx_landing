import React from 'react';

export const CardBodyCategory = (props) => {
    return (
        <div className="row">
            <div className="col">
                <button className="btn project-category">{props.category}</button>
            </div>
        </div>
    );
}