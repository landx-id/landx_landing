const CardBodyFundingDetail = (props) => {
    return (
        <div className="row">
            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <p className="progress-detail">
                            {props.fundingProgress}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            dari {props.totalFunding} Total Pendanaan
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col">
                        <p className="progress-detail">
                            {props.remainingDays}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            Hari Lagi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}