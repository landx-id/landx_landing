import React from 'react';
import ReactTooltip from 'react-tooltip';

export const ProjectDividendDetail = (props) => {
    return (
        <div className="row mt-2">
            <div className="col">
                <div className="row">
                    <div className="col-auto pl-0">
                        <p className="detail-2" style={{ display: "inline" }}>
                            Periode Dividen <a data-tip="Periode dividen aktual akan tetap mengacu pada laporan keuangan dan persetujuan Rapat Umum Pemegang Saham (RUPS)."
                                data-event='click focus'>
                                <i className="iconify"
                                    data-icon="ant-design:info-circle-outlined"
                                    style={{ fontSize: "24px", color: "#2dbe60", marginBottom: "-5px", cursor: 'pointer' }}
                                /></a>
                            <ReactTooltip place="bottom" type="dark" effect="float" />
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
                        <p className="detail-2" style={{ display: "inline" }}>
                            Estimasi Dividen&nbsp;
                            <a
                                data-tip="Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan persetujuan Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi capital gain dari kenaikan harga saham."
                                data-event='click focus'>
                                <i className="iconify" data-icon="ant-design:info-circle-outlined"
                                    style={{ fontSize: "24px", color: "#2dbe60", marginBottom: "-5px", cursor: 'pointer' }} />
                            </a>
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