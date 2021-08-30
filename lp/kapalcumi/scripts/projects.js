fetch("https://api.landx.id/", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({query: `{
    currencies {
      landXProperty {
        address
        annualRentYield
        annualRentYieldUpper
        category
        dividendSchedule
        id
        initialTokenPrice
        launchProgress
        mapImageUrl
        name
        previewImages
        propertyPrice
        settlementDate
        tokenSupply
        totalPurchasePrice
        token {
          symbol
          name
        }
      }
    }
  }`})
})
.then(r => r.json())
.then((data) => {
    var listOfProjects = {};
    listOfProjects = data
    listOfProjects.data.currencies.forEach(function(item, index) {
        if ( item.landXProperty == null
        || item.landXProperty == "") {
            delete listOfProjects.data.currencies[index];
        }
    });

    let projects = [];
    for (let key in listOfProjects.data.currencies) {
        projects.push(listOfProjects.data.currencies[key]);
    }

    projects = projects.sort((a, b) =>
         a["landXProperty"]["settlementDate"] > b["landXProperty"]["settlementDate"] ? -1 : 1
    );

    var cardName = "carouselCards";
    if(document.getElementById("row") == null){
      var base = document.getElementById("card-base");
      var container = document.createElement("div");
      container.setAttribute("class", "container");

      var row = document.createElement("div");
      row.setAttribute("class", "row");
    }else{
      var base = document.getElementById("card-base");
      var container = document.getElementById("container");
      var row = document.getElementById("row");
    }

    const numbChildren = $("#row").children().length == 0 ? 4 : 3;

    for (var i = 0; i < numbChildren; i++) {

        /* for easier management */
        var currentProject = projects[i]["landXProperty"];
        var projectDirectory = currentProject["token"]["symbol"];
        var projectName = currentProject["token"]["name"];
        var projectCategory = currentProject["category"];
        var fundingProgress;
        var totalFunding = numeral(currentProject["totalPurchasePrice"]).format("0,0");

        /* calculate the remaining days */
        const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
        const today = new Date().getTime();
        var remainingDays = numeral((currentProject["settlementDate"] - today) / oneDay).format("0,0");
        /*------------------------------*/
        
        var progress = parseFloat(currentProject["launchProgress"] * 100);
        var lotPrice = numeral(currentProject["initialTokenPrice"]).format("0,0");
        var totalLot = parseInt(currentProject["tokenSupply"], 10);
        var dividendSchedule = currentProject["dividendSchedule"];
        var annualRentYield = parseFloat(currentProject["annualRentYield"]) * 100;
        var annualRentYieldUpper = parseFloat(currentProject["annualRentYieldUpper"]) * 100;
        var isSold = false

        if (currentProject["launchProgress"] == null) {
            // market closed,
            // make assumption that it has been bought completely
            fundingProgress = numeral(currentProject["totalPurchasePrice"]).format("0,0");
        } else {
            fundingProgress = numeral(currentProject["launchProgress"] * currentProject["totalPurchasePrice"]).format("0,0");
        }

        if (remainingDays < 0) {
            remainingDays = 0;
        }

        if (fundingProgress >= totalFunding) {
            isSold = true;
            remainingDays = 0;
        }


        var cardBase = document.createElement("div");
        cardBase.setAttribute("class", "col-12 col-md-auto col-xl-3");

        var cardCustome = document.createElement("div");
        cardCustome.setAttribute("class", "card custom");

        var slide = document.createElement("div");
        slide.setAttribute("class", "carousel slide");
        slide.setAttribute("id", `project-${i}`);
        slide.setAttribute("data-ride", "carousel");
        slide.setAttribute("data-interval", "false");

        var listImages = document.createElement("ol");
        listImages.setAttribute("class","carousel-indicators custom");

        var carouselBase = document.createElement("div");
        carouselBase.setAttribute("class", "carousel-inner");

        for (var j = 0; j < currentProject["previewImages"].length; j++) {
            
            var images = document.createElement("li");
            images.setAttribute("data-target", `#project-${i}`);
            images.setAttribute("data-slide-to", `${j}`);

            if (j == 0) {
                images.setAttribute("class", "active")
            }
            listImages.append(images);

            //============================
            var item = document.createElement("div");
            if (j == 0) {
                /* first active class */
                item.setAttribute("class", "carousel-item custom active");
            } else {
                item.setAttribute("class", "carousel-item custom");
            }
            
            var image = document.createElement("img");
            image.setAttribute("class", "d-block w-100");
            image.setAttribute("src", currentProject["previewImages"][j]);

            item.append(image);
            carouselBase.append(item);
        }

        slide.append(listImages);
        slide.append(carouselBase);
        cardCustome.append(slide);

        var itemCardBody = document.createElement("div");
        itemCardBody.setAttribute("class", "card-body custom");

        var containerFluid = document.createElement("div");
        containerFluid.setAttribute("class", "container-fluid px-0");

        if(isSold){
          /**Start sold Banner*/
          var soldBanner = document.createElement("div");
          soldBanner.setAttribute("class", "sold-banner");
          var imageSoldBanner = document.createElement("img");
          imageSoldBanner.setAttribute("class", "sold-image");
          imageSoldBanner.setAttribute("src", "../../img/habis-terjual.png");

          soldBanner.append(imageSoldBanner);
          containerFluid.append(soldBanner);
          /**End sold Banner*/

        }else{

          /**Start Buy Button*/
          var divBuyButton = document.createElement("div");
          divBuyButton.setAttribute("class", "row");

          var divSubBuyButton = document.createElement("div");
          divSubBuyButton.setAttribute("class", "col");
          divSubBuyButton.innerHTML = `<a href="https://landx.id/project/#/${projectDirectory.toLowerCase()}" class="btn project-button-buy">BELI</a>`;

          divBuyButton.append(divSubBuyButton);
          containerFluid.append(divBuyButton);
          /**End Buy Button*/
        }

        /**Start kode token*/
        var divKodeToken = document.createElement("div");
        divKodeToken.setAttribute("class", "row");

        var divSubKodeToken = document.createElement("div");
        divSubKodeToken.setAttribute("class", "col");
        divSubKodeToken.innerHTML = `<p class="project-symbol">${projectDirectory}</p>`;

        divKodeToken.append(divSubKodeToken);
        containerFluid.append(divKodeToken);
        /**End kode token*/

        /**Start nama project*/
        var divNamaProject = document.createElement("div");
        divNamaProject.setAttribute("class", "row");
        divNamaProject.innerHTML = `<div class="col"><p class="project-name">${projectName}</p></div>`;
        containerFluid.append(divNamaProject);
        /**End nama project*/

        /**Start kategori project*/
        var divKategoriProject = document.createElement("div");
        divKategoriProject.setAttribute("class", "row");
        divKategoriProject.innerHTML = `<div class="col"><button class="btn project-category">${projectCategory}</button></div>`;
        containerFluid.append(divKategoriProject);
        /**End kategori project*/

        /**Start harga project*/
        var divHargaProject = document.createElement("div");
        divHargaProject.setAttribute("class", "row");
        divHargaProject.innerHTML = `
        <div class="col-8">
            <div class="row">
                <div class="col">
                    <p class="progress-detail">Rp ${fundingProgress}</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="sub-progress-detail">dari Rp ${totalFunding} Total Pendanaan</p>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="row">
                <div class="col">
                    <p class="progress-detail">${remainingDays}</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="sub-progress-detail">Hari lagi</p>
                </div>
            </div>
        </div>
        `;
        containerFluid.append(divHargaProject);
        /**End harga project*/

        /**Start progres bar*/
        var divProgresProject = document.createElement("div");
        divProgresProject.setAttribute("class", "row mt-1");
        divProgresProject.innerHTML = `
        <div class="col">
          <div class="progress sm">
            <div class="progress-bar progress-bar-green" style="width: ${progress}%;"></div>
          </div>
        </div>
        `;
        containerFluid.append(divProgresProject);
        /**End progres bar*/

        /**Start Info Lot*/
        var divHargaNJumlahProject = document.createElement("div");
        divHargaNJumlahProject.setAttribute("class", "row mt-3");
        divHargaNJumlahProject.innerHTML = `
        <div class="col">
          <div class="row">
            <div class="col">
              <p class="sub-progress-detail">Harga Per Lot</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="progress-detail-2">Rp ${lotPrice}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <p class="sub-progress-detail">Jumlah Lot</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="progress-detail-2">${totalLot}</p>
            </div>
          </div>
        </div>
        `;
        containerFluid.append(divHargaNJumlahProject);
        /**End Info Lot*/

        /**Start Info Deviden*/
        var divInfoDeviden = document.createElement("div");
        divInfoDeviden.setAttribute("class", "row mt-1");
        divInfoDeviden.innerHTML = `
        <div class="col">
          <div class="row">
            <div class="col">
              <p class="sub-progress-detail">Periode Dividen 
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" class="iconify info-outline-circle" data-icon="ant-design:info-circle-outlined" data-toggle="tooltip" style="vertical-align: -0.125em; transform: rotate(360deg);">
                  <title>Periode dividen aktual akan tetap mengacu pada laporan keuangan dan persetujuan Rapat Umum Pemegang Saham (RUPS).</title>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor"></path>
                  <path d="M464 336a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" fill="currentColor"></path>
                </svg>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="progress-detail-2">${dividendSchedule}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <p class="sub-progress-detail">Estimasi Dividen 
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" class="iconify info-outline-circle" data-icon="ant-design:info-circle-outlined" data-toggle="tooltip" style="vertical-align: -0.125em; transform: rotate(360deg);">
                  <title>Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan persetujuan Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi capital gain dari kenaikan harga saham.</title>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor"></path>
                  <path d="M464 336a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" fill="currentColor"></path>
                </svg>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="progress-detail-2">${annualRentYield}-${annualRentYieldUpper}% <small>Per Tahun</small></p>
            </div>
          </div>
        </div>
        `;
        containerFluid.append(divInfoDeviden);
        /**End Info Deviden*/

        itemCardBody.append(containerFluid);
        cardCustome.append(itemCardBody);
        cardBase.append(cardCustome);

        row.append(cardBase);
    }
    container.append(row);
    base.append(container);
});