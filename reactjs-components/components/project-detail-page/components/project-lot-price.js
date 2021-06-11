import React from 'react';

export const ProjectLotPrice = (props) => {
    return (
        <div className="row mt-4">
            <div className="col">
                <div className="row">
                    <p className="detail-2">
                        Harga Per Lot
                    </p>
                </div>
                <div className="row">
                    <p className="sub-detail-2">
                        {props.lotPrice}
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <p className="detail-2">
                        Jumlah Lot
                    </p>
                </div>
                <div className="row">
                    <p className="sub-detail-2">
                        {props.totalLot}
                    </p>
                </div>
            </div>
        </div>
    );
}
