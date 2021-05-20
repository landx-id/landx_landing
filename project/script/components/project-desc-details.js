const projectDescDetails = (props) => {
    return React.createElement("div",
        {
            className: "row"
        },
        React.createElement("div",
            {
                className: "col-md-6 left-box"
            },
            React.createElement("div",
                {
                    className: "row mt-4"
                },
                React.createElement("p",
                    {
                        className: "description-title"
                    },
                    "DESKRIPSI USAHA"
                )
            ),
            React.createElement("div",
                {
                    className: "row mt-4 mr-3"
                },
                React.createElement("p",
                    {
                        className: "description-content",
                        id: "description"
                    },
                    props.description
                )
            )
        ),
        React.createElement("div",
            {
                className: "col-md-6 right-box pull-md-right"
            },
            React.createElement("div",
                {
                    className: "row mt-4"
                },
                React.createElement("p",
                    {
                        className: "description-title"
                    },
                    "ALAMAT & PETA"
                )
            ),
            React.createElement("div",
                {
                    className: "row mt-4"
                },
                React.createElement("p",
                    {
                        className: "description-content"
                    },
                    props.address
                )
            ),
            React.createElement("div",
                {
                    className: "row mt-4"
                },
                React.createElement("img",
                    {
                        id: "map-picture",
                        style: {
                            width: "100%",
                        },
                        alt: "Peta Alamat",
                        src: props.mapImageUrl
                    }
                )
            )
        )
    )
}