const projectFundingDetails = (props) => {
    return React.createElement("div",
        {
            className: "row"
        },
        React.createElement("div",
            {
                className: "col"
            },
            React.createElement("div",
                {
                    className: "row"
                },
                React.createElement("p",
                    {
                        className: "detail",
                        id: "funding-progress"
                    },
                    `Rp. ${props.fundingProgress}`
                )
            ),
            React.createElement("div",
                {
                    className: "row"
                },
                React.createElement("p",
                    {
                        className: "sub-detail",
                        id: "total-funding"
                    },
                    `dari Rp ${props.totalFunding} Total Pendanaan`
                )
            )
        ),
        React.createElement("div",
            {
                className: "col"
            },
            React.createElement("div",
                {
                    className: "row"
                },
                React.createElement("p",
                    {
                        className: "detail",
                        id: "remaining-days"
                    },
                    props.remainingDays
                )
            ),
            React.createElement("div",
                {
                    className: "row"
                },
                React.createElement("p",
                    {
                        className: "sub-detail",
                    },
                    "Hari Lagi"
                )
            )
        )
    )
};