const ProjectProgressBar = (props) => {
    return (
        <div className="row mt-3">
            <div className="col-12">
                <div className="progress xs custom-progress">
                    <div className="progress-bar progress-bar-aqua"
                        style={{width: `${props.progress}%`}}
                        role="progressbar"
                        aria-valuenow={props.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                    </div>
                </div>
            </div>
        </div>
    );
}