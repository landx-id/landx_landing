import React from 'react';
import ReactDOM from 'react-dom';
import { CarouselGallery } from "./carousel-gallery";
import { ProjectDescDetail } from "./project-review";

export const initializeReviewProject = (project) => {
    ReactDOM.render(
        <div>
            <div className="container">
                <div className="row mx-auto col-lg-6 col-md-12 col-sm-12">
                    <div className="headlineTitle backToAllProject" id="backToAllProject">
                        <a href="../project">
                            <img id="backButton" src="/img/atom-icon-arrow-6.svg"/>
                            <span className="text-primary button-back">Kembali ke Semua Proyek</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <CarouselGallery
                        previewImages={project.images}
                    />
                </div>
            </div>
            <div className="container">
                <ProjectDescDetail
                    description={project.description}
                    day={project.day}
                    hour={project.hour}
                />
            </div>
        </div>
        , document.getElementById('root')
    );
}
