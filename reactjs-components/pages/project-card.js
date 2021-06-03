import { CreateCard } from '../components/project-card/components/create-card';
import { fetchData } from '../util/common.js';
import { toIDR } from '../util/currency.js';

/* Styles */
import '../components/project-card/stylesheets/card.css';

fetchData('https://api.landx.id/').then((listOfProjects) => {
    /* Remove empty projects */
    listOfProjects.data.currencies.forEach(function(item, index) {
        if ( item.landXProperty == null
        || item.landXProperty == "") {
            delete listOfProjects.data.currencies[index];
        }
    });

    /* Rearrange projects */
    let projects = [];

    for (let key in listOfProjects.data.currencies) {
        projects.push(listOfProjects.data.currencies[key]);
    }

    /* Get the last three projects
     * and make the details
     */
    let lastThree = [];
    for (let i = projects.length - 3; i < projects.length; i++) {
        let tmpProject = projects[i].landXProperty;
        tmpProject.fundingProgress = toIDR(tmpProject.launchProgress * tmpProject.totalPurchasePrice);
        tmpProject.totalFunding = toIDR(tmpProject.totalPurchasePrice);

        /* Calculate the remaining days */
        const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
        const today = new Date().getTime();
        tmpProject.remainingDays = Math.floor((tmpProject.settlementDate - today) / oneDay);

        tmpProject.link = `https://landx.id/project/${tmpProject.token.symbol.toLowerCase()}`;
        tmpProject.initialTokenPrice = toIDR(tmpProject.initialTokenPrice);
        tmpProject.tokenSupply = parseInt(tmpProject.tokenSupply, 10);
        tmpProject.annualRentYield = parseFloat(tmpProject.annualRentYield) * 100;
        tmpProject.annualRentYieldUpper = parseFloat(tmpProject.annualRentYieldUpper) * 100;
        tmpProject.isSold = false;

        if (tmpProject.remainingDays < 0) {
            tmpProject.remainingDays = 0;
            tmpProject.isSold = true;
        }

        if (tmpProject.launchProgress == null) {
            // market closed,
            // make assumption that it has been bought completely
            tmpProject.fundingProgress = toIDR(tmpProject.totalPurchasePrice);
        } else {
            tmpProject.fundingProgress = toIDR(tmpProject.launchProgress * tmpProject.totalPurchasePrice);
        }

        if (tmpProject.fundingProgress >= tmpProject.totalFunding) {
            tmpProject.isSold = true;
            tmpProject.remainingDays = 0;
        }

        lastThree.push(tmpProject);
    }

    CreateCard(lastThree);
})