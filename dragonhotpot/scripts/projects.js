var listOfProjects = {};

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
      }
    }
  }`})
})
.then(r => r.json())
.then(data => listOfProjects = data)
.then(() => {
  listOfProjects["data"]["currencies"].forEach(function(item, index) {
      if ( item["landXProperty"] == null 
        || item["landXProperty"] == "") {
          delete listOfProjects["data"]["currencies"][index];
      }
  });

  var projects = [];

  for (var key in listOfProjects["data"]["currencies"]) {
    projects.push(listOfProjects["data"]["currencies"][key]);
  }

  var cardName = "carouselCards";
  var base = document.getElementById("base-cards");

  for (var i = projects.length - 4; i < projects.length; i++) {
      var cardBase = document.createElement("div");
      cardBase.setAttribute("style", "margin-left: -30px");

      /* for easier management */
      var currentProject = projects[i]["landXProperty"];
      var projectDirectory = currentProject["mapImageUrl"].split("/")[4];
      var projectName = currentProject["name"];
      var projectCategory = currentProject["category"];
      var fundingProgress = numeral(currentProject["launchProgress"] * currentProject["totalPurchasePrice"]).format("0,0");
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

      if (remainingDays < 0) {
          remainingDays = 0;
      }

      var slide = document.createElement("div");

      slide.setAttribute("class", "carousel");
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

      var carouselBase = document.createElement("div");
      carouselBase.setAttribute("class", "carousel-inner");

      for (var j = 0; j < currentProject["previewImages"].length; j++) {
          var item = document.createElement("div");
          if (j == 0) {
            /* first active class */
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

          /* Set the text based on its image directory */
          var itemCardBodyRow1 = document.createElement("div");
          itemCardBodyRow1.setAttribute("class", "row")
          itemCardBodyRow1.innerHTML = createProjectHeader(projectDirectory, projectName);

          /* Project Category */
          var itemCardBodyRow2 = document.createElement("div");
          itemCardBodyRow2.setAttribute("class", "row");
          itemCardBodyRow2.innerHTML = createProjectCategory(projectCategory);

          /* Project Progress */
          var itemCardBodyRow3 = document.createElement("div");
          itemCardBodyRow3.setAttribute("class", "row");
          itemCardBodyRow3.innerHTML = createProjectProgress(fundingProgress, totalFunding, Math.floor(remainingDays), progress);

          /* Lot Details */
          var itemCardBodyRow4 = document.createElement("div");
          itemCardBodyRow4.setAttribute("class", "row");
          itemCardBodyRow4.innerHTML = createProjectLotDetails(lotPrice, totalLot);

          /* Dividend Details */
          var itemCardBodyRow5 = document.createElement("div")
          itemCardBodyRow5.setAttribute("class", "row");
          itemCardBodyRow5.innerHTML = createProjectDividendDetails(dividendSchedule, annualRentYield, annualRentYieldUpper);

          /* Each of card details for carousel */
          itemCardBody.append(itemCardBodyRow1);
          itemCardBody.append(itemCardBodyRow2);
          itemCardBody.append(itemCardBodyRow3);
          itemCardBody.append(itemCardBodyRow4);
          itemCardBody.append(itemCardBodyRow5);
          
          /* Append the card to the carousel */
          itemCard.append(image);
          itemCard.append(itemCardBody);
          item.append(itemCard);
          carouselBase.append(item);

          /* Append each carousel card to its base */
          slide.append(listImages);
          slide.append(carouselBase);
          cardBase.append(slide);
      }
      base.append(cardBase);
  }

  if (getMobileOperatingSystem() == "iOS") {
    var btnInvest = document.getElementById("btn-invest");
    btnInvest.href = "https://apps.apple.com/id/app/landx/id1453823676";
  } else {
    var btnInvest = document.getElementById("btn-invest");
    btnInvest.href = "https://play.google.com/store/apps/details?id=store.numoney.landxapp&hl=en&gl=US";
  }
});