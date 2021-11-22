import React from 'react';

export const ProjectDescDetail = (props) => {
    var converter = new showdown.Converter();

    return (
        <div className="row justify-content-center mt-4 mb-4">
            <div className="col-lg-6 col-md-12 col-sm-12 deskripsi-review">
                <div className="text-center mb-2">
                    <p className="description-title">
                        Segera Listing
                    </p>
                </div>
                <div className="row mt-2 m-1">
                    <p className="description-content-review" dangerouslySetInnerHTML={{__html: converter.makeHtml(props.description)}}>
                    </p>
                </div>
            </div>
        </div>
    );
}
