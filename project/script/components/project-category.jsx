const ProjectCategory = (props) => {
    return (
        <div className="row">
            <button className="btn rounded-pill semi-transparent-button" id="project-category">
                {props.category}
            </button>
        </div>
    );
}