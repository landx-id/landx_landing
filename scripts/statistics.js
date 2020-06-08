$.when($.ready).then(function () {
    const raisedFunds = 13750000000;

    fetch('https://mobile.landx.id/mobile/landing_data')
        .then(data => data.json())
        .then(landingData => {
            numeral.register('locale', 'id', {
                delimiters: {
                    thousands: '.',
                    decimal: ','
                },
                abbreviations: {
                    thousand: 'Ribu',
                    million: 'Juta',
                    billion: 'Miliar',
                    trillion: 'Trilyun'
                }
            });
            numeral.locale('id');

            $('#property-count').text(landingData.property_count);
            $('#registered-users').text(numeral(landingData.registered_users).format('0,0'));
            $('#raised-funds').text(numeral(raisedFunds).format('0.00 a'));
            $('#dividend-payout').text(numeral(parseInt(landingData.dividend_payout)).format('0 a'));
        });
});