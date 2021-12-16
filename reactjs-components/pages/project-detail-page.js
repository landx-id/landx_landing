import { initializeDetailProject } from '../components/project-detail-page/components/initialize-project.js';
import { initializeReviewProject } from '../components/project-review-page/components/initialize-project.js';
import { fetchDataNoLimit, fetchData, calculateRemainingDays } from '../util/common.js';
import { toIDR } from '../util/currency.js';
import { CreateCard } from '../components/project-card/components/create-card.js';

/* Styles */
import '../components/project-review-page/stylesheets/style.css';

fetch('/lottie/upcoming.json')
    .then(response => response.json())
    .then(data => {
        let currentProject = [];
        let id = $("#project-id").val();
        let isComingProject = false;

        data.upcoming.forEach(val => {
            let key = Object.keys(val)[0];
            if (key == id) {
                currentProject.push(val[key]);
                return;
            }
        });

        if (currentProject.length > 0) {
            const now = Date.now();
            let listingAt = new Date(currentProject[0].listing_at).getTime();
            let distance = listingAt - now;

            if (distance > 0) {
                isComingProject = true;
                let previewImages = currentProject[0].images;
                currentProject[0]['day'] = Math.floor((distance) / (1000 * 60 * 60 * 24));
                currentProject[0]['hour'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                initializeReviewProject(currentProject[0]);

                // Show the carousel gallery
                $("#content-slider").lightSlider({
                    loop: true,
                    keyPress: true,
                });
                $('#image-gallery').lightSlider({
                    gallery: true,
                    item: 1,
                    thumbItem: previewImages.length,
                    slideMargin: 0,
                    speed: 1500,
                    pause: 5000,
                    auto: true,
                    loop: true,
                    onSliderLoad: function () {
                        $('#image-gallery').removeClass('cS-hidden');
                    }
                });

                var otherProject = document.getElementById('other-project');
                otherProject.parentNode.removeChild(otherProject);
            }
        }

        if (isComingProject == false) {
            fetchDataNoLimit('https://api.landx.id').then((listOfProjects) => {
                let currentProject = null;

                let id = $("#project-id").val();

                listOfProjects.data.currencies.forEach(function (item, index) {
                    if (item.landXProperty != null && item.landXProperty != "") {
                        if (item.landXProperty.token.symbol == id) {
                            currentProject = item.landXProperty;
                        }
                    }
                });

                if (currentProject != null) {

                    let previewImages = currentProject.previewImages;
                    initializeDetailProject(currentProject);

                    // Show the carousel gallery
                    $("#content-slider").lightSlider({
                        loop: true,
                        keyPress: true,
                    });
                    $('#image-gallery').lightSlider({
                        gallery: true,
                        item: 1,
                        thumbItem: previewImages.length,
                        slideMargin: 0,
                        speed: 1500,
                        pause: 5000,
                        auto: true,
                        loop: true,
                        onSliderLoad: function () {
                            $('#image-gallery').removeClass('cS-hidden');
                        }
                    });
                }

                /* Remove empty projects */
                listOfProjects.data.currencies.forEach(function (item, index) {
                    if (item.landXProperty == null
                        || item.landXProperty == "") {
                        delete listOfProjects.data.currencies[index];
                    }
                });

                /* Rearrange projects */
                let projects = [];

                for (let key in listOfProjects.data.currencies) {
                    projects.push(listOfProjects.data.currencies[key]);
                }

                projects = projects.sort((a, b) =>
                    a["landXProperty"]["settlementDate"] > b["landXProperty"]["settlementDate"] ? -1 : 1
                );

                /* Get the latest projects
                * and make the details
                */
                let latestProjects = [];
                for (let i = 0; i < 4; i++) {
                    let tmpProject = projects[i].landXProperty;
                    tmpProject.fundingProgress = toIDR(tmpProject.launchProgress * tmpProject.totalPurchasePrice);
                    tmpProject.totalFunding = toIDR(tmpProject.totalPurchasePrice);
                    tmpProject.remainingDays = calculateRemainingDays(tmpProject.settlementDate);
                    tmpProject.link = `/project/#/${tmpProject.token.symbol.toLowerCase()}`;
                    tmpProject.initialTokenPrice = toIDR(tmpProject.initialTokenPrice);
                    tmpProject.tokenSupply = parseInt(tmpProject.tokenSupply, 10);
                    tmpProject.annualRentYield = parseFloat(tmpProject.annualRentYield) * 100;
                    tmpProject.annualRentYieldUpper = parseFloat(tmpProject.annualRentYieldUpper) * 100;
                    tmpProject.isSold = false;

                    if (tmpProject.remainingDays < 0) {
                        tmpProject.remainingDays = 0;
                    }

                    if (tmpProject.launchProgress == null) {
                        // market closed,
                        // make assumption that it has been bought completely
                        tmpProject.fundingProgress = toIDR(tmpProject.totalPurchasePrice);
                    } else {
                        tmpProject.fundingProgress = toIDR(tmpProject.launchProgress * tmpProject.totalPurchasePrice);
                    }

                    if (tmpProject.launchProgress == null || tmpProject.launchProgress >= 1.0) {
                        tmpProject.isSold = true;
                        tmpProject.remainingDays = 0;
                    }

                    latestProjects.push(tmpProject);
                }

                CreateCard(latestProjects);
            })
        }
    })