export function fetchData(url) {
    /* Fetch from the API url */

    return fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query: `{
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
                        token {
                            name
                            symbol
                        }
                        previewImages
                    }
                }
            }`
        })
    })
    .then(r => r.json())
    .then((data) => {
        return data;
    });
}