dummyData = {};

fetch("http://api.nmx.localhost.nip.io:8080/", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({query: `{
    currencies {
      landXProperty {
        acquisitionCost
        address
        annualRentYield
        annualRentYieldUpper
        cashReserved
        category
        description
        dividendSchedule
        id
        initialTokenPrice
        issuerName
        launchProgress
        mapImageUrl
        mapUrl
        name
        previewImages
        propertyPrice
        settlementDate
        tokenSupply
        totalPurchasePrice
      }
    }
  }`})
})
.then(r => r.json())
.then(data => dummyData = data)
.then(() => {
  /* for button invest sekarang */
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
          return "Android";
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }

      return "unknown";
  }

  $.each(dummyData["data"]["currencies"], function(key, value) {
      if (value["landXProperty"] == null || value["landXProperty"] == "") {
          delete dummyData["data"]["currencies"][key];
      }
  });

  var projects = [];

  for (var key in dummyData["data"]["currencies"]) {
      projects.push(dummyData["data"]["currencies"][key]);
  }

  var cardName = "carouselCards";
  var base = document.getElementById("base-cards");

  for (var i = projects.length - 4; i < projects.length - 1; i++) {
      var cardBase = document.createElement("div");
      cardBase.setAttribute("class", "col-auto mt-3");

      /* for easier management */
      var currentProject = projects[i]["landXProperty"];
      var projectDirectory = currentProject["mapImageUrl"].split("/")[4];
      var projectName = currentProject["name"];
      var projectCategory = currentProject["category"];
      var fundingProgress = numeral(currentProject["propertyPrice"]).format("0,0");
      var totalFunding = numeral(currentProject["totalPurchasePrice"]).format("0,0");
      /* calculate the remaining days */
      const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
      const today = new Date().getTime();
      var remainingDays = (currentProject["settlementDate"] - today) / oneDay;
      /*------------------------------*/
      var progress = parseFloat(currentProject["launchProgress"] * 100);
      var lotPrice = numeral(currentProject["initialTokenPrice"]).format("0,0");
      var totalLot = parseInt(currentProject["tokenSupply"], 10);
      var dividendSchedule = currentProject["dividendSchedule"];
      var annualRentYield = parseFloat(currentProject["annualRentYield"]) * 100;
      var annualRentYieldUpper = parseFloat(currentProject["annualRentYieldUpper"]) * 100;

      var dividendPeriodDesc = "Periode dividen aktual akan tetap mengacu pada laporan keuangan dan " +
                              "persetujuan Rapat Umum Pemegang Saham (RUPS).";
      var dividendEstimates = "Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen adalah " + 
                              "ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan " +
                              "persetujuan Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi capital gain dari " +
                              "kenaikan harga saham";

      if (remainingDays < 0) {
          remainingDays = 0;
      }

      var slide = document.createElement("div");

      slide.setAttribute("class", "carousel slide");
      slide.setAttribute("id", `${cardName}${i}`);
      slide.setAttribute("data-interval", "false");

      var listImages = document.createElement("ol");
      listImages.setAttribute("class","carousel-indicators carousel-bottom");

      for (var j = 0; j < currentProject["previewImages"].length; j++) {
          var images = document.createElement("li");
          images.setAttribute("data-target", `#${cardName}${i}`);
          images.setAttribute("data-slide-to", `${j}`);

          if (j == 0) {
              images.setAttribute("class", "active")
          }

          listImages.append(images);
      }

      var inner = document.createElement("div");
      inner.setAttribute("class", "carousel-inner");

      /* first active class */
      for (var j = 0; j < currentProject["previewImages"].length; j++) {
          var item = document.createElement("div");
          if (j == 0) {
              item.setAttribute("class", "carousel-item active");
          } else {
              item.setAttribute("class", "carousel-item");
          }

          /* start of each card */
          var itemCard = document.createElement("div");
          itemCard.setAttribute("class", "carousel-card");

          /* preview image */
          var image = document.createElement("img");
          image.setAttribute("class", "img-fluid carousel-img");
          image.setAttribute("src", currentProject["previewImages"][j]);

          var itemCardBody = document.createElement("div");
          itemCardBody.setAttribute("class", "card-body");

          var itemCardBodyRow1 = document.createElement("div");
          itemCardBodyRow1.setAttribute("class", "row")
          itemCardBodyRow1.innerHTML = `
              <div class="col">
                  <div class="text-left">
                      <span class="text-secondary region-code">${projectDirectory}</span>
                  </div>
                  <div class="btn-buy">
                      <a href="#" class="btn btn-sm btn-primary rounded-pill" id="btnBuy" role="button">
                          <span>BELI</span>
                      </a>
                  </div>
                  <span class="card-title text-primary">${projectName}</span>
              </div>
          `;

          var itemCardBodyRow2 = document.createElement("div");
          itemCardBodyRow2.setAttribute("class", "row");
          itemCardBodyRow2.innerHTML = `
              <div class="col justify-content-start">
                  <button class="btn btn-sm rounded-pill semi-transparent-button" style="font-size: x-small;">${projectCategory}</button>
              </div>
          `;

          var itemCardBodyRow3 = document.createElement("div");
          itemCardBodyRow3.setAttribute("class", "row");
          itemCardBodyRow3.innerHTML = `
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
          `;

          var itemCardBodyProgress = document.createElement("div");
          itemCardBodyProgress.setAttribute("class", "progress xs");
          itemCardBodyProgress.innerHTML = `
              <div class="progress-bar progress-bar-aqua" style="width: ${progress}%" role="progressbar"
                  aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
                  <span class="sr-only">${progress}% Complete</span>
              </div>
          `;

          var itemCardBodyRow4 = document.createElement("div");
          itemCardBodyRow4.setAttribute("class", "row");
          itemCardBodyRow4.innerHTML = `
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

          var itemCardBodyRow5 = document.createElement("div")
          itemCardBodyRow5.setAttribute("class", "row");
          itemCardBodyRow5.innerHTML = `
          <div class="col">
              <div class="text-left">
                  <span class="small-text">Periode Dividen</span>
                  <i class="fa fa-info-circle" style="font-size: 9px; color:seagreen;" data-toggle="tooltip" title="${dividendPeriodDesc}"></i>
                  <p class="text-primary" style="font-weight: bold;">${dividendSchedule}</p>
              </div>
          </div>
          <div class="col mt-2">
              <div class="text-left text-primary">
                  <span class="small-text" style="display: block;">
                      Estimasi Dividen
                      <i class="fa fa-info-circle" style="font-size: 9px; color:seagreen;" data-toggle="tooltip" title="${dividendEstimates}"></i>
                  </span>
                  <span style="display: inline-block; font-size: medium; font-weight: bold;">${annualRentYield}-${annualRentYieldUpper}%</span>
                  <span style="font-size: x-small;"> Per Tahun</span>
              </div>
          </div>
          `;

          /* details */
          itemCardBody.append(itemCardBodyRow1);
          itemCardBody.append(itemCardBodyRow2);
          itemCardBody.append(itemCardBodyRow3);
          itemCardBody.append(itemCardBodyProgress);
          itemCardBody.append(itemCardBodyRow4);
          itemCardBody.append(itemCardBodyRow5);
          
          /* base body */
          itemCard.append(image);
          itemCard.append(itemCardBody);
          item.append(itemCard);
          inner.append(item);

          /* each slide */
          slide.append(listImages);
          slide.append(inner);
          cardBase.append(slide);
      }
      base.append(cardBase);
  }

  if (getMobileOperatingSystem() == "iOS") {
    btnInvest = document.getElementById("btn-invest");
    btnInvest.href = "https://apps.apple.com/id/app/landx/id1453823676";
  } else {
    btnInvest = document.getElementById("btn-invest");
    btnInvest.href = "https://play.google.com/store/apps/details?id=store.numoney.landxapp&hl=en&gl=US";
  }
});