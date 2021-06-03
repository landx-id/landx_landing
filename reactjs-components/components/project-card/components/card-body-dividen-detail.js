import React from 'react';

export const CardBodyDividendDetail = (props) => {
    return (
        <div className="row mt-3">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            Periode Dividen <span className="iconify info-outline-circle" data-icon="ant-design:info-circle-outlined" data-toggle="tooltip" title={props.dividendPeriodDesc}></span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="progress-detail-2">
                            {props.dividendSchedule}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            Estimasi Dividen <span className="iconify info-outline-circle" data-icon="ant-design:info-circle-outlined" data-toggle="tooltip" title={props.dividendEstimatesDesc}></span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="progress-detail-2">
                            {props.annualRentYield}-{props.annualRentYieldUpper}% <small>Per Tahun</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}