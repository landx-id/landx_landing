const ProjectAppProspectus = (props) => {
    return (
        <div className="row row-buttons">
            <div className="col">
                <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp" id="btn-invest">
                    <button className="btn btn-primary btn-detail-bottom" style={{width: "100%", boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14)"}}>
                        BELI VIA APP
                    </button>
                </a>
            </div>
            <div className="col">
                <a href={props.prospectusLink}>
                    <button className="btn btn-outline-success btn-detail-bottom" style={{width: "100%"}}>
                        DOWNLOAD PROSPEKTUS
                    </button>
                </a>
            </div>
        </div>
    );
}