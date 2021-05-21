const projectSymbol = (props) => {
    return React.createElement("div",
        {
            className: "row"
        },
        React.createElement("p", 
            {
                id: "project-symbol"
            }, 
            props.name
        )
    );
};