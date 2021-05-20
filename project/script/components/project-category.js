const projectCategory = (props) => {
    return React.createElement("div",
        {
            className: "row"
        },
        React.createElement("button",
            {
                className: "btn rounded-pill semi-transparent-button",
                id: "project-category"
            },
            props.category
        )
    );
};