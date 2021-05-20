const projectDividendDetails = (props) => {
    return React.createElement("div",
        {
            className: "row mt-2"
        },
        React.createElement("div",
            {
                className: "col"
            },
            React.createElement("div",
                {
                    className: "row"
                },
                React.createElement("div",
                    {
                        className: "col-auto pl-0"
                    },
                    React.createElement("span",
                        {
                            className: "detail-2",
                            style: {
                                display: "inline"
                            }
                        },
                        "Periode Dividen "
                    ),
                    React.createElement("i", 
                        {
                            className: "fa fa-info-circle",
                            style: {
                                fontSize: "12px",
                                color: "seagreen"
                            },
                            "data-toggle": "tooltip",
                            id: "dividend-period-desc",
                            "data-original-title": "",
                            title:
                                "Periode dividen aktual akan tetap mengacu pada laporan keuangan dan persetujuan Rapat Umum Pemegang Saham (RUPS)."
                        }
                    )
                )
            ),
            React.createElement("div",
                {
                    className: "row"
                },
                React.createElement(
                    "p",
                    {
                        className: "sub-detail-2",
                        id: "dividend-period"
                    },
                    props.dividendSchedule
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
                React.createElement("div",
                    {
                        className: "col-auto pl-0"
                    },
                    React.createElement("span",
                        {
                            className: "detail-2"
                        },
                        "Estimasi Dividen "
                    ),
                    React.createElement("i", 
                        {
                            className: "fa fa-info-circle",
                            style: {
                                fontSize: "12px",
                                color: "seagreen"
                            },
                            "data-toggle": "tooltip",
                            id: "dividend-estimates",
                            "data-original-title": "",
                            title:
                                "Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan." +
                                " Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif," +
                                " dividen aktual akan tetap mengacu pada kinerja penerbit dan persetujuan " +
                                "Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi" +
                                " capital gain dari kenaikan harga saham"
                        }
                    )
                )
            ),
            React.createElement("div",
                {
                    className: "row"
                },
                React.createElement("p",
                    {
                        className: "sub-detail-2",
                        id: "dividend-estimation"
                    },
                    `${props.annualRentYield}-${props.annualRentYieldUpper}% Per Tahun`
                )
            )
        )
    );
};