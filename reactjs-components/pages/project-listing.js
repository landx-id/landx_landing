import { CreateCard } from '../components/project-card/components/create-card';
import {fetchData, capitalizeTheFirstLetterOfEachWord} from "../util/common";
import {fromIDR, toIDR} from "../util/currency";

$(document).ready(() => {
    let projects = [];
    let renderedProjects = [];

    let buttonFilter = $('#btnFilter');
    let buttonReset = $('#btnResetFilter');
    let sorterForm = $('#sorterForm');
    let categoryForm = $('#categoryForm');
    let minimumRangeForm = $('#minimumRange');
    let maximumRangeForm = $('#maximumRange');
    let slider = document.getElementById('slider-range').noUiSlider;

    buttonFilter.click(function() {
        filter();
        CreateCard(renderedProjects);
        $('#projectCount').text(renderedProjects.length)
    });

    minimumRangeForm.change(function (){
        slider.set(
            [fromIDR(minimumRangeForm.val()), fromIDR(maximumRangeForm.val())]);
    })

    maximumRangeForm.change(function (){
        slider.set(
            [fromIDR(minimumRangeForm.val()), fromIDR(maximumRangeForm.val())]);
    })

    buttonReset.click(function() {
        sorterForm.val('settlementDate');
        categoryForm.val('allCategory');
        minimumRangeForm.val(toIDR(1000000));
        maximumRangeForm.val(toIDR(5000000));
        slider.set([1000000, 5000000]);

        renderedProjects = [...projects];
        filter();
        CreateCard(renderedProjects);
        $('#projectCount').text(renderedProjects.length)
    });


    fetchData('https://api.landx.id/').then((data) => {
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
        $('#projectCount').text(renderedProjects.length);

        category.forEach((category) => {
            $('#categoryForm').append(`<option value="${category}">${capitalizeTheFirstLetterOfEachWord(category)}</option>`)
        })
    });

    function filter() {
        let filter_sort = sorterForm.val();
        let filter_category = categoryForm.val();
        let filter_minimum_value = fromIDR(minimumRangeForm.val());
        let filter_maximum_value = fromIDR(maximumRangeForm.val());

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
});

