import {CreateCard} from '../components/project-card/components/create-card';
import {capitalizeTheFirstLetterOfEachWord, fetchData} from "../util/common";
import {fromIDR, toIDR} from "../util/currency";

let projects = [];
let renderedProjects = [];

let buttonFilter = document.getElementById('btnFilter');
let buttonReset = document.getElementById('btnResetFilter');
let sorterForm = document.getElementById('sorterForm');
let categoryForm = document.getElementById('categoryForm');
let minimumRangeForm = document.getElementById('minimumRange');
let maximumRangeForm = document.getElementById('maximumRange');
let slider = document.getElementById('slider-range').noUiSlider;
let countText = document.getElementById('projectCount');

buttonFilter.addEventListener("click", () => {
    filter();
    CreateCard(renderedProjects);
    countText.textContent = renderedProjects.length.toString();
});

minimumRangeForm.addEventListener("change", () => {
    slider.set(
        [fromIDR(minimumRangeForm.val()), fromIDR(maximumRangeForm.val())]);
});

maximumRangeForm.addEventListener("change", () => {slider.set(
    [fromIDR(minimumRangeForm.val()), fromIDR(maximumRangeForm.val())]);
});


buttonReset.addEventListener("click", () => {
    sorterForm.value = 'settlementDate';
    categoryForm.value = 'allCategory';
    minimumRangeForm.value = toIDR(1000000);
    maximumRangeForm.value = toIDR(5000000);
    slider.set([1000000, 5000000]);

    renderedProjects = [...projects];
    filter();
    CreateCard(renderedProjects);
    countText.textContent = renderedProjects.length.toString();
});


fetchData('http://api.nmx.127.0.0.1.nip.io:8080/').then((data) => {
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

            project["link"] = `https://landx.id/project/${project["token"]["symbol"].toLowerCase()}`;
            project["initialTokenPrice"] = toIDR(project["initialTokenPrice"]);
            project["tokenSupply"] = parseInt(project["tokenSupply"], 10);
            project["annualRentYield"] = parseFloat(project["annualRentYield"]) * 100;
            project["annualRentYieldUpper"] = parseFloat(project["annualRentYieldUpper"]) * 100;
            project["isSold"] = false;

            if (project["remainingDays"] < 0) {
                project["remainingDays"] = 0;
                project["isSold"] = true;
            }

            if (project["launchProgress"] == null) {
                project["fundingProgress"] = toIDR(project["totalPurchasePrice"]);
            } else {
                project["fundingProgress"] = toIDR(project["launchProgress"] * project["totalPurchasePrice"]);
            }

            if (project["fundingProgress"] >= project["totalFunding"]) {
                project["isSold"] = true;
                project["remainingDays"] = 0;
            }

            category.add(project["category"]);
            projects.push(project);
        }
    });

    renderedProjects = [...projects];
    filter();
    CreateCard(renderedProjects);
    countText.textContent = renderedProjects.length.toString();

    category.forEach((category) => {
        categoryForm.innerHTML += `<option value="${category}">${capitalizeTheFirstLetterOfEachWord(category)}</option>`;
    })
});

function filter() {
    let filter_sort = sorterForm.value;
    let filter_category = categoryForm.value;
    let filter_minimum_value = fromIDR(minimumRangeForm.value);
    let filter_maximum_value = fromIDR(maximumRangeForm.value);

    renderedProjects = projects.filter(
        (property) =>
            fromIDR(property['initialTokenPrice']) >= filter_minimum_value
            && fromIDR(property['initialTokenPrice']) <= filter_maximum_value
    )

    if (filter_category !== 'allCategory') {
        renderedProjects = renderedProjects.filter(
            (property) => !filter_category.localeCompare(property["category"])
        )
    }
    renderedProjects.sort((a, b) => a[filter_sort] > b[filter_sort] ? -1 : 1)
}

