$(document).ready(() => {
    let formatted_property = [];
    let category = new Set();

    let buttonFilter = $('#btnFilter');
    let buttonReset = $('#btnResetFilter');
    let sorterForm = $('#sorterForm');
    let categoryForm = $('#categoryForm');
    let minimumRangeForm = $('#minimumRange');
    let maximumRangeForm = $('#maximumRange');
    let slider = document.getElementById('slider-range').noUiSlider;

    numeral.register('locale', 'id', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
    });
    numeral.locale('id');

    let moneyFormat = wNumb({
        decimals: 0,
        thousand: '.',
        prefix: 'Rp '
    });

    buttonFilter.click(function() {
        let filter_sort = sorterForm.val();
        let filter_category = categoryForm.val();
        let filter_minimum_value = moneyFormat.from(minimumRangeForm.val());
        let filter_maximum_value = moneyFormat.from(maximumRangeForm.val());

        console.log((filter_minimum_value));
        console.log((filter_maximum_value));

        render(formatted_property, filter_minimum_value, filter_maximum_value, filter_category, filter_sort);
    });

    minimumRangeForm.change(function (){
        slider.set(
            [moneyFormat.from(minimumRangeForm.val()), moneyFormat.from(maximumRangeForm.val())]);
    })
    maximumRangeForm.change(function (){
        slider.set(
            [moneyFormat.from(minimumRangeForm.val()), moneyFormat.from(maximumRangeForm.val())]);
    })

    buttonReset.click(function() {
        sorterForm.val('settlement_date');
        categoryForm.val('all_category');
        minimumRangeForm.val(moneyFormat.to(1000000));
        maximumRangeForm.val(moneyFormat.to(5000000));
        slider.set([1000000, 5000000]);

        render(formatted_property, 1000000, 5000000, 'all_category', 'settlement_date');
    });

    fetchProperties()
        .then(r => r.json())
        .then(properties => properties["data"]["currencies"])
        .then(properties => {
            properties.forEach(property => {
                if (property["landXProperty"] !== null) {
                    property = property["landXProperty"];
                    formatted_property.push({
                        project_symbol:
                            property["token"]["symbol"],
                        project_url: property["token"]["symbol"].toLowerCase(),
                        project_name:
                            property["token"]["name"],
                        project_category:
                            property["category"],
                        project_total_purchase:
                            Number(property["totalPurchasePrice"]),
                        project_price_progress:
                            Number(property["totalPurchasePrice"] * property["launchProgress"]),
                        project_progress:
                            property["launchProgress"] * 100,
                        project_price_per_lot:
                            Number(property["initialTokenPrice"]),
                        project_lot:
                            Number(property["tokenSupply"]),
                        project_dividend_period:
                            property["dividendSchedule"],
                        project_dividend_estimation:
                            numeral(property["annualRentYield"]*100).format('0.0') + "-"
                                + numeral(property["annualRentYieldUpper"]*100).format('0.0') + "%",
                        project_images:
                            property["previewImages"],
                        settlement_date: property["settlementDate"],
                    })
                    category.add(property["category"]);
                }
            });
        })
        .then(() => {

            category.forEach((category) => {
                $('#categoryForm').append(`<option value="${category}">${capitalizeTheFirstLetterOfEachWord(category)}</option>`)
            })
            render(formatted_property);
        });
})

function render(formatted_property,
                minimum_price=1000000,
                maximum_price=5000000,
                category='all_category',
                sort='settlement_date',
) {
    let propertiesHTML = '';
    let filtered_property = formatted_property.filter(
        (property) =>
            property['project_price_per_lot'] >= minimum_price && property['project_price_per_lot'] <= maximum_price
    )
    if (category !== 'all_category') {
        filtered_property = filtered_property.filter(
            (property) => !category.localeCompare(property['project_category'])
        )
    }
    filtered_property.sort((a, b) => a[sort] > b[sort] ? -1 : 1)
    filtered_property.forEach(property => {
        let propertyHTML = format_template_property(property);
        propertiesHTML = propertiesHTML + propertyHTML;
    })
    $('#propertiesCard').html(propertiesHTML)
    $('#projectCount').text(filtered_property.length)
    $('[data-toggle="tooltip"]').tooltip();
}

function capitalizeTheFirstLetterOfEachWord(words) {
    let separateWord = words.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

async function fetchProperties() {
    return fetch('https://api.landx.id/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                currencies {
                    landXProperty {
                        name
                        category
                        acquisitionCost
                        annualRentYield
                        annualRentYieldUpper
                        cashReserved
                        description(language: "id")
                        initialTokenPrice
                        launchProgress
                        previewImages
                        propertyPrice
                        settlementDate
                        token {
                            name
                            symbol
                        }
                        tokenSupply
                        totalPurchasePrice
                        dividendSchedule
                    }
                }
            }   
            `
        })
    });
}

function format_template_property({
      project_symbol,
      project_url,
      project_name,
      project_category,
      project_total_purchase,
      project_price_progress,
      project_progress,
      project_price_per_lot,
      project_lot,
      project_dividend_period,
      project_dividend_estimation,
      project_images,
      settlement_date,
}) {
    return `
     <div class="col-auto mt-3">
        <div id="carousel-${project_symbol}" class="carousel slide" data-interval="false">
            ${createCarouselIndicators(project_symbol, project_images)}
            <div class="card" style="width: 19rem;">
                ${createCarouselImages(project_images)}
                ${createCardBody(
                    project_symbol,
                    project_url,
                    project_name,
                    project_category,
                    project_total_purchase,
                    project_price_progress,
                    project_progress,
                    project_price_per_lot,
                    project_lot,
                    project_dividend_period,
                    project_dividend_estimation,
                    settlement_date,
                )}
            </div>
        </div>
     </div>
    `;
}



function createCarouselIndicators(project_symbol, project_images) {
    let indicators = '';

    project_images.forEach((image, index) => {
        if (index === 0) {
            indicators = indicators + `<li data-target="#carousel-${project_symbol}" data-slide-to="${index}" class="active"></li>`

        } else {
            indicators = indicators + `<li data-target="#carousel-${project_symbol}" data-slide-to="${index}"></li>`
        }
    });

    return `
        <ol class="carousel-indicators carousel-top">
                ${indicators}
        </ol>
    `
}

function createCarouselImages(project_images) {
    let images;
    project_images.forEach((image, index) => {
        if (index === 0) {
            images = images + `
                <div class="carousel-item active">
                    <img class="img-fluid carousel-img" src="${image}" alt="Card image cap" style="height: 180px; width: 19rem; border-top-left-radius: 13px;">
                </div>`;
        } else {
            images = images + `
                <div class="carousel-item">
                    <img class="img-fluid carousel-img" src="${image}" alt="Card image cap" style="height: 180px; width: 19rem; border-top-left-radius: 13px;">
                </div>`;
        }
    });
    return `
        <div class="carousel-inner">
            ${images}
        </div>
    `
}

function createCardBody(
    project_symbol,
    project_url,
    project_name,
    project_category,
    project_total_purchase,
    project_price_progress,
    project_progress,
    project_price_per_lot,
    project_lot,
    project_dividend_period,
    project_dividend_estimation,
    settlement_date,
) {
    return `
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <div class="text-left">
                        <span class="text-secondary region-code">${project_symbol}</span>
                    </div>
                    <div style="position: absolute;top: -37px; margin-left: 72%;">
                        <a href="${project_url}" class="btn btn-sm btn-primary rounded-pill" id="btnBuy" role="button" style="vertical-align: middle">
                            <span>BELI</span>
                        </a>
                    </div>
                    <h5 class="card-title text-left text-primary font-weight-bold" style="font-size: medium;">${project_name}</h5>
                </div>
            </div>
            <button class="btn btn-sm rounded-pill semi-transparent-button px-3" style="font-size: x-small;">${project_category}</button>
            <div class="row mt-2">
                <div class="col-8">
                    <div class="text-left">
                        <p style="font-size: small;" class="text-secondary font-weight-bold">${numeral(project_price_progress).format('0,0')}</p>
                        <p class="small-text">dari Rp ${numeral(project_total_purchase).format('0,0')} Total Pendanaan</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="text-left">
                        <span style="font-size: small;" class="text-secondary">
                            ${numeral(calculateRemainingDays(settlement_date)).format('0,0')}
                        </span>
                        <p class="small-text">Hari lagi</p>
                    </div>
                </div>
            </div>
            <div class="progress xs mt-2">
                <div class="progress-bar progress-bar-aqua" style="width: ${project_progress}%" role="progressbar"
                    aria-valuenow="${project_progress}" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <div class="text-left">
                        <span class="small-text">Harga Per Lot</span>
                        <p class="text-primary" style="font-weight: bold;font-size: small;">
                            Rp ${numeral(project_price_per_lot).format('0,0')}
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-left">
                        <span class="small-text">Jumlah Lot</span>
                        <p class="text-primary font-weight-bold" style="font-size: small;">${numeral(project_lot).format('0,0')}</p>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col">
                    <div class="text-left">
                        <span class="small-text">Periode Dividen</span>
                        <i class="fa fa-info-circle" style="font-size: 11px; color:seagreen;" data-toggle="tooltip"
                            title="Periode dividen aktual akan tetap mengacu pada laporan keuangan dan persetujuan Rapat Umum Pemegang Saham (RUPS).">
                        </i>
                        <p class="text-primary font-weight-bold" style="font-size: small;">${project_dividend_period}</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-left">
                        <span class="small-text">Estimasi Dividen</span>
                        <i class="fa fa-info-circle" style="font-size: 11px; color:seagreen;" data-toggle="tooltip"
                            title="Disclaimer: Kinerja masa lalu bukan merupakan indikasi kinerja masa depan.
                               Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif,
                               dividen aktual akan tetap mengacu pada kinerja penerbit dan persetujuan Rapat Umum Pemegang Saham (RUPS).
                               Estimasi dividen belum termasuk potensi capital gain dari kenaikan harga saham.">
                        </i>
                        <p class="text-primary" style="font-size: small;">
                            <span class="font-weight-bold">${project_dividend_estimation}</span>
                            <span style="font-size: x-small;"> Per Tahun</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
}

function calculateRemainingDays(settlement_date) {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date().getTime();
    let remainingDays = (settlement_date - today) / oneDay;
    if (remainingDays < 0) {
        return 0;
    }
    return remainingDays;

}
