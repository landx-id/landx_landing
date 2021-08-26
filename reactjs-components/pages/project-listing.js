import {fetchData} from "../util/common";
import {toIDR} from "../util/currency";
import {CreateFilter} from "../components/project-filter/create-filter";
import {CreateCard} from "../components/project-card/components/create-card";
import {ProjectCountPortal} from "../components/project-filter/project-count-portal";

let projects = [];


CreateFilter({
    minimumRange: 1000000,
    maximumRange: 5000000,
    categories: [],
    projects: [],
});

fetchData('https://api.landx.id').then((data) => {
    let category = new Set();

    data["data"]["currencies"].forEach(function(item) {
        if (item["landXProperty"] != null) {
            let project = item["landXProperty"];
            project["name"] = project["token"]["name"];
            project["symbol"] = project["token"]["symbol"];
            project["fundingProgress"] = toIDR(project["launchProgress"] * project["totalPurchasePrice"]);
            project["totalFunding"] = toIDR(project["totalPurchasePrice"]);

            /* Calculate the remaining days */
            const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
            const today = new Date().getTime();
            project["remainingDays"] = Math.floor((project["settlementDate"] - today) / oneDay);

            project["link"] = `https://landx.id/project/#${project["token"]["symbol"].toLowerCase()}`;
            project["initialTokenPrice"] = toIDR(project["initialTokenPrice"]);
            project["tokenSupply"] = parseInt(project["tokenSupply"], 10);
            project["annualRentYield"] = parseFloat(project["annualRentYield"]) * 100;
            project["annualRentYieldUpper"] = parseFloat(project["annualRentYieldUpper"]) * 100;
            project["isSold"] = false;

            if (project["remainingDays"] < 0) {
                project["remainingDays"] = 0;
            }

            if (project["launchProgress"] == null) {
                project["fundingProgress"] = toIDR(project["totalPurchasePrice"]);
            } else {
                project["fundingProgress"] = toIDR(project["launchProgress"] * project["totalPurchasePrice"]);
            }

            if (project["launchProgress"] == null || project["launchProgress"] >= 1.0) {
                project["isSold"] = true;
                project["remainingDays"] = 0;
            }

            category.add(project["category"]);
            projects.push(project);
        }
    });
    projects = projects.sort((a, b) => a["settlementDate"] > b["settlementDate"] ? -1 : 1)

    CreateFilter({
        minimumRange: 1000000,
        maximumRange: 5000000,
        categories: category,
        projects: projects,
    });
});
