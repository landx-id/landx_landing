const projectLotPrice = (props) => {
    return React.createElement("div",
        {
            className: "row mt-4"
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
                        className: "detail-2"
                    },
                    "Harga Per Lot"
                )
            ),
            React.createElement("div",
                {
                    className: "row"
                },
                React.createElement("p",
                    {
                        className: "sub-detail-2",
                        id: "lot-price"
                    },
                    `Rp ${props.lotPrice}`
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
                        className: "detail-2"
                    },
                    "Jumlah Lot"
                )
            ),
            React.createElement("div",
                {
                    className: "row"
                },
                React.createElement("p",
                    {
                        className: "sub-detail-2",
                        id: "total-lot"
                    },
                    props.totalLot
                )
            )
        )
    );
};