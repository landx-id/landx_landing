const generateDetailUpcoming = (data) => {
    const expiredAt = new Date(data.listing_at).getTime(); //convert date and time to unix time
    const now = Date.now();
    const distance = expiredAt - now;
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const images = screen.width < 768 ? data.images[2] : data.images[1];

    return `
    <div class="container">
        <div class="container-upcoming" id="container-upcoming" style="background-image: url('${images}')">
            <div class="title-project-upcoming" id="title-upcoming">
                ${data.title}
            </div>
            <div class="description-project-upcoming" id="description-upcoming">
                ${data.description}
            </div>
            <div class="row info">
                <div class="subInfo">
                    <h6 class="caption-project">Harga Per Lot</h6>
                    <h4 class="caption-val-project" id="price-lot-upcoming">Rp ${numeral(data.initialTokenPrice).format("0,0")}</h4>
                </div>
                <div class="subInfo">
                    <h6 class="caption-project periode">Periode Dividen</h6>
                    <h4 class="caption-val-project val-periode" id="periode-upcoming">${data.dividendSchedule}</h4>
                </div>
                <div class="subInfo">
                    <h6 class="caption-project deviden">Estimasi Dividen</h6>
                    <h4 class="caption-val-project val-deviden" id="deviden-upcoming">${parseFloat(data.annualRentYield) * 100}-${parseFloat(data.annualRentYieldUpper) * 100}% Per Tahun</h4>
                </div>
            </div>
            <div class="row flex-sm-row d-flex-inline whiteBox-under storeContainer">
                <h5 class="countDown">${day > 0 ? day : 0} Hari : ${hours > 0 ? hours : 0} Jam</h5>
                <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp"> <img src="../img/Play Store.svg" alt="Play Store" > </a>
                <a href="https://apps.apple.com/id/app/landx/id1453823676"> <img src="../img/App Store.svg" alt="App Store" > </a>
            </div>
        </div>
    </div>`;
}

$(document).ready(function () {
    var url = $(location).attr('href'),
        parts = url.split("/"),
        last_part = parts[parts.length - 2];

    if (last_part == "#") {
        last_part = parts[parts.length - 1];

        $.getJSON("../lottie/upcoming.json", function(data) {
            let isExistProject = false;
            let temp = [];
            data.upcoming.forEach((v, i) => {
                if(last_part.toLowerCase() === Object.keys(v)[0]){
                    isExistProject = true;
                    temp.push({'index':i, 'name_project':last_part.toLowerCase()});
                    return;
                }
            });

            if(isExistProject){
                var upcoming_detail = document.getElementById("root");
                upcoming_detail.innerHTML = generateDetailUpcoming(data.upcoming[temp[0].index][temp[0].name_project]);
            }
        });
    }
});