import React from 'react';

export const ProjectDescDetail = (props) => {
    var converter = new showdown.Converter();

    return (
        <div className="row">
            <div className="col-md-6 left-box">
                <div className="row mt-4">
                    <p className="description-title">
                        DESKRIPSI USAHA
                    </p>
                </div>
                <div className="row mt-4 mr-3">
                    <p className="description-content" dangerouslySetInnerHTML={{__html: converter.makeHtml(props.description)}}>
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
                    <p className="description-content">
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
