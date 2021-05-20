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
                token {
                    name
                    symbol
                }
                previewImages
            }
        }
    }`})
})
.then(r => r.json())
.then(data => listOfProjects = data)
.then(()=> {
    
    var currentProject = null;

    var id = $("#project-id").val();

    listOfProjects["data"]["currencies"].forEach(function(item, index) {
        if (item["landXProperty"] != null && item["landXProperty"] != "") {
            if(item["landXProperty"]["id"] == id) {
                currentProject = item["landXProperty"];
            }
        }
    });

    if (currentProject != null) {
        
        var previewImages = currentProject["previewImages"];

        initReact(currentProject);

        // Show the carousel gallery
        $("#content-slider").lightSlider({
            loop:true,
            keyPress:true,
        });
        $('#image-gallery').lightSlider({
            gallery:true,
            item: 1,
            thumbItem: previewImages.length,
            slideMargin: 0,
            speed: 1000,
            auto: true,
            loop: true,
            onSliderLoad: function() {
                $('#image-gallery').removeClass('cS-hidden');
            }  
        });
    }
});