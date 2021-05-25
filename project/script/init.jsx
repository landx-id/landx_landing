function initReact(project) {
    ReactDOM.render(
    // wrapper
    <div>
        <div className="container">
            <div className="row">
                <carouselGallery
                    previewImages={project["previewImages"]}
                />
                <ProjectWrapper
                    project={project}
                />
            </div>
        </div>
        <hr className="mt-5 mb-5" />
        <div className="container">
            <projectDescDetails
                description={project["description"]}
                address={project["address"]}
                mapImageUrl={project["mapImageUrl"]}
            />
        </div>
    </div>,
        document.getElementById("root")
    );
}