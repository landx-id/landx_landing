const ProjectDescDetail = (props) => {
    return (
        <div className="row">
            <div className="col-md-6 left-box">
                <div className="row mt-4">
                    <p className="description-title">
                        DESKRIPSI USAHA
                    </p>
                </div>
                <div className="row mt-4 mr-3">
                    <p className="description-title">
                        {props.description}
                    </p>
                </div>
            </div>
            <div className="col-md-6 right-box">
                <div className="row mt-4">
                    <p className="description-title">
                        ALAMAT & PETA
                    </p>
                </div>
                <div className="row mt-4">
                    <p className="description-title">
                        {props.address}
                    </p>
                </div>
                <div className="row mt-4">
                    <img src={props.mapImageUrl} alt="Peta Alamat" id="map-picture" style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    );
}