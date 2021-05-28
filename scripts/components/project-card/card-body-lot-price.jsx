const CardBodyLotPrice = (props) => {
    return (
        <div className="row mt-3">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            Harga Per Lot
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="progress-detail-2">
                            {props.initialTokenPrice}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            Jumlah Lot
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="progress-detail-2">
                            {props.tokenSupply}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}