const CardBodyName = (props) => {
    return (
        <div className="row">
            <div className="col">
                <p className="project-name">
                    {props.name}
                </p>
            </div>
        </div>
    );
}