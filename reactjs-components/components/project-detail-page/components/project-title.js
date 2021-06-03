import React from 'react';

export const ProjectTitle = (props) => {
    return (
        <div className="row-cols-1">
            <div className="row">
                <p className="main-title">
                    {props.name}
                </p>
            </div>
            <div className="row">
                <p className="main-title">
                    - {props.issuerName}
                </p>
            </div>
        </div>
    );
}