import React from 'react';

export const CardBodyProgressBar = (props) => {
    return (
        <div className="row mt-1">
            <div className="col">
                <div className="progress sm">
                    <div className="progress-bar progress-bar-green" style={{width: props.launchProgress + '%'}}></div>
                </div>
            </div>
        </div>
    );
}