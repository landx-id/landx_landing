/* Fetch two times (?) */

listOfProjects = {};

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
                id
                name
                issuerName
                mapImageUrl
                launchProgress
                totalPurchasePrice
                category
                settlementDate
                initialTokenPrice
                tokenSupply
                dividendSchedule
                annualRentYield
                annualRentYieldUpper
                description
                address
            }
        }
    }`})
})
.then(r => r.json())
.then(data => listOfProjects = data)
.then(()=> {
    
    var currentProject = null;

    var id = $("#project-id").val();
    // console.log(id);

    listOfProjects["data"]["currencies"].forEach(function(item, index) {
        if (item["landXProperty"] != null && item["landXProperty"] != "") {
            if(item["landXProperty"]["id"] == id) {
                currentProject = item["landXProperty"];
            }
        }
    });

    if (currentProject != null) {
        var projectDirectory = currentProject["mapImageUrl"].split("/")[4];
        var projectName = currentProject["name"];
        var projectIssuerName = currentProject["issuerName"];
        var projectCategory = currentProject["category"];
        var fundingProgress;
        var totalFunding = numeral(currentProject["totalPurchasePrice"]).format("0,0");
        var lotPrice = numeral(currentProject["initialTokenPrice"]).format("0,0");
        var totalLot = parseInt(currentProject["tokenSupply"], 10);
        var dividendSchedule = currentProject["dividendSchedule"];
        var annualRentYield = parseFloat(currentProject["annualRentYield"]) * 100;
        var annualRentYieldUpper = parseFloat(currentProject["annualRentYieldUpper"]) * 100;
        var projectDescription = currentProject["description"];
        var projectAddress = currentProject["address"];
        var mapPicture = currentProject["mapImageUrl"]
        var progressBar = currentProject["launchProgress"] * 100;

        /* calculate the remaining days */
        const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
        const today = new Date().getTime();
        var remainingDays = (currentProject["settlementDate"] - today) / oneDay;
        /*------------------------------*/

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


        $("#project-directory").text(projectDirectory)
        $("#project-name").text(projectName);
        $("#project-issuername").text(`- ${projectIssuerName}`);
        $("#project-category").text(projectCategory);
        $("#funding-progress").text(`Rp ${fundingProgress}`);
        $("#total-funding").text(`dari Rp ${totalFunding} Total Pendanaan`);
        $("#remaining-days").text(Math.floor(remainingDays));
        $("#lot-price").text(`Rp ${lotPrice}`);
        $("#total-lot").text(`${totalLot}`);
        $("#dividend-period").text(dividendSchedule);
        $("#dividend-estimation").text(`${annualRentYield}-${annualRentYieldUpper}% Per Tahun`);
        $("#description").text(projectDescription);
        $("#address").text(projectAddress);
        $("#map-picture").attr("src", mapPicture);
        $("#download-prospectus").attr("href", `/prospektus/${projectDirectory}.pdf`);
        $("#progress-bar").attr("style", `width: ${progressBar}%`)
        $("#progress-bar").attr("aria-valuenow", progressBar)
    }

    if (getMobileOperatingSystem() == "iOS") {
        var btnInvest = document.getElementById("btn-invest");
        btnInvest.href = "https://apps.apple.com/id/app/landx/id1453823676";
    } else {
        var btnInvest = document.getElementById("btn-invest");
        btnInvest.href = "https://play.google.com/store/apps/details?id=store.numoney.landxapp&hl=en&gl=US";
    }
});