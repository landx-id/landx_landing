import React from 'react';

export const ProjectFundingDetail = (props) => {
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <p className="detail">
                        {props.fundingProgress}
                    </p>
                </div>
                <div className="row">
                    <p className="sub-detail">
                        dari {props.totalFunding}
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <p className="detail">
                        {props.remainingDays}
                    </p>
                </div>
                <div className="row">
                    <p className="sub-detail">
                        Hari Lagi
                    </p>
                </div>
            </div>
        </div>
    );
}
