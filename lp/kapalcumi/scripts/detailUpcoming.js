const generateDetailUpcoming = (data) => {
    const expiredAt = new Date(data.expired_at).getTime(); //convert date and time to unix time
    const now = Date.now();
    const distance = expiredAt - now;

    return `
    <div class="container">
        <div class="container-upcoming">
            <div class="title-project-upcoming" id="title-upcoming">
                ${data.title}
            </div>
            <div class="description-project-upcoming" id="description-upcoming">
                ${data.description}
            </div>
            <div class="row info">
                <div>
                    <h6 class="caption-project">Harga Per Lot</h6>
                    <h4 class="caption-val-project" id="price-lot-upcoming">Rp ${numeral(data.initialTokenPrice).format("0,0")}</h4>
                </div>
                <div>
                    <h6 class="caption-project periode">Periode Dividen</h6>
                    <h4 class="caption-val-project val-periode" id="periode-upcoming">${data.dividendSchedule}</h4>
                </div>
                <div>
                    <h6 class="caption-project deviden">Estimasi Dividen</h6>
                    <h4 class="caption-val-project val-deviden" id="deviden-upcoming">${parseFloat(data.annualRentYield) * 100}-${parseFloat(data.annualRentYieldUpper) * 100}% Per Periode</h4>
                </div>
            </div>
            <div class="row flex-sm-row d-flex-inline" style="background-color: #fff; width:fit-content; border-radius: 12px; margin: 30px 0px 0px 0px;">
                <h5 class="countDown">${Math.floor(distance / (1000 * 60 * 60 * 24))} Hari : ${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} Jam</h5>
                <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp"> <img src="../../img/Play Store.svg" alt="Play Store" > </a>
                <a href="https://apps.apple.com/id/app/landx/id1453823676"> <img src="../../img/App Store.svg" alt="App Store" > </a>
            </div>
        </div>
    </div>`;
}
$.getJSON("data/upcoming.json", function(data) {
    console.log(data); // this will show the info it in firebug console
    var upcoming_detail = document.getElementById("root");
    upcoming_detail.innerHTML = generateDetailUpcoming(data.upcoming[0]["kapal-cumi"]);
});