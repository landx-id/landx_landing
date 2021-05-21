const projectTitle = (props) => {
    return React.createElement("div",
        {
            className: "row-cols-1"
        },
        React.createElement("div",
            {
                className: "row"
            },
            React.createElement("p",
                {
                    id: "project-name",
                    className: "main-title"
                },
                props.name
            )
        ),
        React.createElement("div",
            {
                className: "row"
            },
            React.createElement("p",
                {
                    id: "project-issuername",
                    className: "main-title"
                },
                `- ${props.issuerName}`
            )
        )
    );
};