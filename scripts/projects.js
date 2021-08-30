var listOfProjects = {};

function toIDR(money) {
    return Intl.NumberFormat("id-ID",{
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(money);
}

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
                    name
                    symbol
                }
            }
        }
    }`})
})
.then(r => r.json())
.then(data => listOfProjects = data)
.then(() => {
    /* Remove empty project(s) */
    listOfProjects["data"]["currencies"].forEach(function(item, index) {
        if ( item["landXProperty"] == null
        || item["landXProperty"] == "") {
            delete listOfProjects["data"]["currencies"][index];
        }
    });

    /* Rearrange projects */
    var projects = [];

    for (var key in listOfProjects["data"]["currencies"]) {
        projects.push(listOfProjects["data"]["currencies"][key]);
    }

    /* Get the last three projects
     * and make the details
     */
    var lastThree = [];
    for (var i = projects.length - 3; i < projects.length; i++) {
        var tmpProject = projects[i]["landXProperty"];
        tmpProject.fundingProgress = toIDR(tmpProject["launchProgress"] * tmpProject["totalPurchasePrice"]);
        tmpProject.totalFunding = toIDR(tmpProject["totalPurchasePrice"]);

        /* Calculate the remaining days */
        const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
        const today = new Date().getTime();
        tmpProject.remainingDays = Math.floor((tmpProject["settlementDate"] - today) / oneDay);

        tmpProject.link = `http://localhost:8099/project/#/${tmpProject["token"]["symbol"].toLowerCase()}`;
        tmpProject["launchProgress"] *= 100;
        tmpProject["initialTokenPrice"] = toIDR(tmpProject["initialTokenPrice"]);
        tmpProject["tokenSupply"] = parseInt(tmpProject["tokenSupply"], 10);
        tmpProject["annualRentYield"] = parseFloat(tmpProject["annualRentYield"]) * 100;
        tmpProject["annualRentYieldUpper"] = parseFloat(tmpProject["annualRentYieldUpper"]) * 100;
        tmpProject.isSold = false;

        if (tmpProject.remainingDays < 0) {
            tmpProject.remainingDays = 0;
        }

        if (tmpProject["launchProgress"] == null) {
            // market closed,
            // make assumption that it has been bought completely
            tmpProject.fundingProgress = toIDR(tmpProject["totalPurchasePrice"]);
        } else {
            tmpProject.fundingProgress = toIDR(tmpProject["launchProgress"] * tmpProject["totalPurchasePrice"]);
        }

        if (tmpProject.fundingProgress >= tmpProject.totalFunding) {
            tmpProject.isSold = true;
            tmpProject.remainingDays = 0;
        }

        lastThree.push(tmpProject);
    }

    CreateCard(lastThree);
});