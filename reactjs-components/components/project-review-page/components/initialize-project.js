import React from 'react';
import ReactDOM from 'react-dom';
import { CarouselGallery } from "./carousel-gallery";
import { ProjectDescDetail } from "./project-review";

export const initializeProject = (project) => {
    ReactDOM.render(
        <div>
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
                />
            </div>
        </div>
        , document.getElementById('root')
    );
}
