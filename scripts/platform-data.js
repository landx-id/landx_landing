const url = 'https://numoney.exchange/mobile/landing_data';
fetch(url, {
    mode: 'cors'
  })
  .then((resp) => resp.json()).then(data => {
    document.querySelector('#property-stats').innerHTML = data.property_count;
    document.querySelector('#investor-stats').innerHTML = data.investor_count;

    propertyPrice = {
      'JKT001': 3260000,
      'JKT002': 2720000
    };
    propertyLotAmount = 1000;

    fundsRaised = 0;
    Object.keys(data.lot_reserve).forEach((propertyName) => {
      fundsRaised += (1000 - parseInt(data.lot_reserve[propertyName])) * propertyPrice[propertyName];
    });

    fundsRaisedText = "Rp. " + (fundsRaised / 1000000000) + " M";

    document.querySelector('#funds-stats').innerHTML = fundsRaisedText;

    dividentPayoutText = "Rp. " + (data.divident_payout / 1000000) + " JT";

    document.querySelector('#divident-stats').innerHTML = dividentPayoutText;

    document.querySelector('.platform-stats').removeAttribute("hidden");
  });
