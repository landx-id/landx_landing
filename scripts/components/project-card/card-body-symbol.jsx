const CardBodySymbol = (props) => {
    return (
        <div className="row">
            <div className="col">
                <p className="project-symbol">
                    {props.symbol}
                </p>
            </div>
        </div>
    );
}