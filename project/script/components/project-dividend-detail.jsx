const ProjectDividendDetail = (props) => {
    return (
        <div className="row mt-2">
            <div className="col">
                <div className="row">
                    <div className="col-auto pl-0">
                        <p className="detail-2" style={{display: "inline"}}>
                            Periode Dividen <i className="iconify" data-icon="ant-design:info-circle-outlined"
                                                data-toggle="tooltip"
                                                style={{fontSize: "24px", color: "#2dbe60", marginBottom: "-5px"}}
                                                title="Periode dividen aktual akan tetap mengacu pada laporan keuangan dan persetujuan Rapat Umum Pemegang Saham (RUPS).">
                                            </i>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p className="sub-detail-2">
                        {props.dividendSchedule}
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-auto pl-0">
                        <p className="detail-2" style={{display: "inline"}}>
                            Estimasi Dividen <i className="iconify" data-icon="ant-design:info-circle-outlined"
                                                data-toggle="tooltip"
                                                style={{fontSize: "24px", color: "#2dbe60", marginBottom: "-5px"}}
                                                title="Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan persetujuan Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi capital gain dari kenaikan harga saham.">
                                            </i>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p className="sub-detail-2">
                        {props.annualRentYield}-{props.annualRentYieldUpper}% Per Tahun
                    </p>
                </div>
            </div>
        </div>
    );
}