import React from 'react';
import ReactDOM from 'react-dom';
import { CarouselGallery } from "./carousel-gallery";
import { ProjectDescDetail } from "./project-desc-detail";
import { ProjectWrapper } from "./project-wrapper";


export const initializeProject = (project) => {
    ReactDOM.render(
        <div>
            <div className="container">
                <div className="row">
                    <CarouselGallery
                        previewImages={project.previewImages}
                    />
                    <ProjectWrapper
                        project={project}
                    />
                </div>
            </div>

            <hr className="mt-5 mb-5" />
            <div className="container">
                <ProjectDescDetail
                    description={project.description}
                    address={project.address}
                    mapImageUrl={project.mapImageUrl}
                />
            </div>
        </div>
        , document.getElementById('root')
    );
}