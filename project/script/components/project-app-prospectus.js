const projectAppProspectus = (props) => {
    return React.createElement("div",
        {
            className: "row row-buttons"
        },
        React.createElement("div",
            {
            className: "col"
            },
            React.createElement("a",
                {
                    href: "https://play.google.com/store/apps/details?id=store.numoney.landxapp&hl=en&gl=US",
                    id: "btn-invest"
                },
                React.createElement("button",
                    {
                        className: "btn btn-primary btn-detail-bottom",
                        style: {
                            width: "100%", 
                            boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14)"
                        }
                    },
                    "BELI VIA APP"
                )
            )
        ),
        React.createElement("div",
            {
            className: "col"
            },
            React.createElement("a",
                {
                    href: props.prospectusLink,
                    id: "download-prospectus"
                },
                React.createElement("button",
                    {
                        className: "btn btn-outline-success btn-detail-bottom",
                        style: {
                            width: "100%"
                        }
                    },
                    "DOWNLOAD PROSPEKTUS"
                )
            )
        )
    );
};