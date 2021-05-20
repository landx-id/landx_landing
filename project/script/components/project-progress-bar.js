const projectProgressBar = (props) => {
    return React.createElement("div",
        {
            className: "row mt-3"
        },
        React.createElement("div",
            {
                className: "col-12"
            },
            React.createElement("div",
                {
                    className: "progress xs custom-progress"
                },
                React.createElement("div", 
                    {
                        className: "progress-bar progress-bar-aqua",
                        id: "progress-bar",
                        style: {width: `${props.progress}%`},
                        role: "progressbar",
                        "aria-valuenow": props.progress,
                        "aria-valuemin": "0",
                        "aria-valuemax": "100"
                    }
                )
            )
        )
    );
};