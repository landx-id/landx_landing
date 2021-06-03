import React from 'react';

export const CardBodyDividendDetail = (props) => {
    return (
        <div className="row mt-1">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            Periode Dividen <span
                                                className="iconify info-outline-circle"
                                                data-icon="ant-design:info-circle-outlined"
                                                data-toggle="tooltip"
                                                title="Periode dividen aktual akan tetap mengacu pada laporan keuangan dan persetujuan Rapat Umum Pemegang Saham (RUPS).">
                                            </span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="progress-detail-2">
                            {props.dividendSchedule}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <p className="sub-progress-detail">
                            Estimasi Dividen <span
                                                className="iconify info-outline-circle"
                                                data-icon="ant-design:info-circle-outlined"
                                                data-toggle="tooltip"
                                                title="Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan persetujuan Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi capital gain dari kenaikan harga saham."></span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="progress-detail-2">
                            {props.annualRentYield}-{props.annualRentYieldUpper}% <small>Per Tahun</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}