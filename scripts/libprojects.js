function createProjectHeader(projectDirectory, projectName, projectLink) {
    return `
        <div class="col">
            <div class="text-left">
                <span class="text-secondary region-code">${projectDirectory}</span>
            </div>
            <div class="btn-buy">
                <a href="${projectLink}" class="btn btn-sm btn-primary rounded-pill" id="btnBuy" role="button">
                    <span>BELI</span>
                </a>
            </div>
            <span class="card-title text-primary">${projectName}</span>
        </div>
    `;
}

function createProjectCategory(projectCategory) {
    return `
        <div class="col justify-content-start">
            <button class="btn btn-sm rounded-pill semi-transparent-button" style="font-size: x-small;">${projectCategory}</button>
        </div>
    `;
}

function createProjectProgress(fundingProgress, totalFunding, remainingDays, progress) {
    return `
        <div class="col-8">
            <div class="text-left">
                <span style="font-size: small;" class="text-secondary">Rp ${fundingProgress}</span>
                <p class="small-text">dari Rp ${totalFunding} Total Pendanaan</p>
            </div>
        </div>
        <div class="col-4">
            <div class="text-left">
                <span style="font-size: small;" class="text-secondary">${remainingDays}</span>
                <p class="small-text">Hari lagi</p>
            </div>
        </div>
        <div class="col">
            <div class="progress xs">
                <div class="progress-bar progress-bar-aqua" style="width: ${progress}%" role="progressbar"
                    aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
                    <span class="sr-only">${progress}% Complete</span>
                </div>
            </div>
        </div>
    `;
}

function createProjectLotDetails(lotPrice, totalLot) {
    return `
        <div class="col">
            <div class="text-left">
                <span class="small-text">Harga Per Lot</span>
                <p class="text-primary" style="font-weight: bold;">Rp ${lotPrice}</p>
            </div>
        </div>
        <div class="col">
            <div class="text-left">
                <span class="small-text">Jumlah Lot</span>
                <p class="text-primary" style="font-weight: bold;">${totalLot}</p>
            </div>
        </div>
    `;
}

function createProjectDividendDetails(dividendSchedule, annualRentYield, annualRentYieldUpper) {
    var dividendPeriodDesc = "Periode dividen aktual akan tetap mengacu pada laporan keuangan dan " +
        "persetujuan Rapat Umum Pemegang Saham (RUPS).";
    var dividendEstimates = "Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen adalah " + 
        "ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan " +
        "persetujuan Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi capital gain dari " +
        "kenaikan harga saham";

    return `
    <div class="col">
        <div class="text-left">
            <span class="small-text">Periode Dividen</span>
            <i class="fa fa-info-circle" style="font-size: 10px; color:seagreen;" data-toggle="tooltip" title="${dividendPeriodDesc}"></i>
            <p class="text-primary" style="font-weight: bold;">${dividendSchedule}</p>
        </div>
    </div>
    <div class="col mt-2">
        <div class="text-left text-primary">
            <span class="small-text" style="display: block;">
                Estimasi Dividen
                <i class="fa fa-info-circle" style="font-size: 10px; color:seagreen;" data-toggle="tooltip" title="${dividendEstimates}"></i>
            </span>
            <span style="display: inline-block; font-size: medium; font-weight: bold;">${annualRentYield}-${annualRentYieldUpper}%</span>
            <span style="font-size: x-small;"> Per Tahun</span>
        </div>
    </div>
    `;
}

function createSoldImg() {
    return `
        <img src="../img/habis-terjual.png">
    `;
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "Unknown";
}  