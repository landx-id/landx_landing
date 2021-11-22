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
                <div id="as">
                    <div className="col-lg-2 col-md-2 col-sm-12" id="merah">
                        <img src="/img/ic_calendar.webp"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" id="kuning">
                        <span class="count-down-thumnail text-count-down-thumnail">{props.day} Hari : {props.hour} Jam</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12" id="biru">
                        <a href={'http://sendy.landx.id/subscription?f=7MlPrs1pHK3LfJpBLI1sWbtA7QnddO6vvwSrt6luEiVRHYokshVxsTz8e18aHxXS'} className="btn btn-light" id="remaind">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                            <p>Remind Me</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
