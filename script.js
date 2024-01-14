
    var jsonData; // Declare jsonData in a broader scope
    var fromCurrencyDropdown;

    document.addEventListener("DOMContentLoaded", function () {
    var fromCurrencyDropdown = document.getElementById('fromCurrency');
    var toCurrencyDropdown = document.getElementById('toCurrency');
    var errorMessage = document.getElementById('error-message');
    var sourceAmountInput = document.getElementById('amount');
    var resultDisplay = document.getElementById('result');
    var datesDisplay = document.getElementById('dates');
    var exchangeRateDisplay = document.getElementById('exchange-rate-display');
    


    // Assign JSON data to the variable
    jsonData = {"usd":{"code":"USD","alphaCode":"USD","numericCode":"840","name":"U.S. Dollar","rate":1.2749178626337,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.78436425538365},"eur":{"code":"EUR","alphaCode":"EUR","numericCode":"978","name":"Euro","rate":1.1631957114823,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.85970055608753},"aud":{"code":"AUD","alphaCode":"AUD","numericCode":"036","name":"Australian Dollar","rate":1.9038102036948,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.5252624437348},"chf":{"code":"CHF","alphaCode":"CHF","numericCode":"756","name":"Swiss Franc","rate":1.0879554545911,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.91915527954761},"cad":{"code":"CAD","alphaCode":"CAD","numericCode":"124","name":"Canadian Dollar","rate":1.7051707110998,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.58645154616515},"jpy":{"code":"JPY","alphaCode":"JPY","numericCode":"392","name":"Japanese Yen","rate":184.96573119331,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0054064068708755},"hkd":{"code":"HKD","alphaCode":"HKD","numericCode":"344","name":"Hong Kong Dollar","rate":9.9704639591522,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.10029623537048},"mad":{"code":"MAD","alphaCode":"MAD","numericCode":"504","name":"Moroccan Dirham","rate":12.526530983416,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.079830561336091},"zar":{"code":"ZAR","alphaCode":"ZAR","numericCode":"710","name":"South African Rand","rate":23.78044759415,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.042051353156449},"iqd":{"code":"IQD","alphaCode":"IQD","numericCode":"368","name":"Iraqi dinar","rate":1662.9703553054,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.00060133362979664},"bob":{"code":"BOB","alphaCode":"BOB","numericCode":"068","name":"Bolivian Boliviano","rate":8.745936537667,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.11433881273814},"kwd":{"code":"KWD","alphaCode":"KWD","numericCode":"414","name":"Kuwaiti Dinar","rate":0.39189037283397,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":2.5517340290052},"thb":{"code":"THB","alphaCode":"THB","numericCode":"764","name":"Thai Baht","rate":44.50148987975,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.022471157768024},"twd":{"code":"TWD","alphaCode":"TWD","numericCode":"901","name":"New Taiwan Dollar ","rate":39.480558697403,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.025328922208636},"uzs":{"code":"UZS","alphaCode":"UZS","numericCode":"860","name":"Uzbekistan Sum","rate":15726.522261468,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":6.3586849233038e-5},"omr":{"code":"OMR","alphaCode":"OMR","numericCode":"512","name":"Omani Rial","rate":0.49052438972195,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":2.0386346142071},"ils":{"code":"ILS","alphaCode":"ILS","numericCode":"376","name":"Israeli New Sheqel","rate":4.7588568294238,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.21013449991121},"pen":{"code":"PEN","alphaCode":"PEN","numericCode":"604","name":"Peruvian Nuevo Sol","rate":4.7120670281868,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.21222108981433},"tjs":{"code":"TJS","alphaCode":"TJS","numericCode":"972","name":"Tajikistan Ruble","rate":13.906343913823,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.071909626728415},"sek":{"code":"SEK","alphaCode":"SEK","numericCode":"752","name":"Swedish Krona","rate":13.112043511435,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.076265762779682},"sgd":{"code":"SGD","alphaCode":"SGD","numericCode":"702","name":"Singapore Dollar","rate":1.6973755856826,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.58914480002837},"huf":{"code":"HUF","alphaCode":"HUF","numericCode":"348","name":"Hungarian Forint","rate":441.97867610534,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0022625525937402},"uah":{"code":"UAH","alphaCode":"UAH","numericCode":"980","name":"Ukrainian Hryvnia","rate":48.237613293107,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.020730710574831},"clp":{"code":"CLP","alphaCode":"CLP","numericCode":"152","name":"Chilean Peso","rate":1160.6807650282,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0008615633429367},"dop":{"code":"DOP","alphaCode":"DOP","numericCode":"214","name":"Dominican Peso","rate":73.878960389245,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.013535653381305},"cny":{"code":"CNY","alphaCode":"CNY","numericCode":"156","name":"Chinese Yuan","rate":9.1367143435881,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.10944853504168},"isk":{"code":"ISK","alphaCode":"ISK","numericCode":"352","name":"Icelandic Krona","rate":174.88660678476,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0057179907506053},"azn":{"code":"AZN","alphaCode":"AZN","numericCode":"944","name":"Azerbaijan Manat","rate":2.1660855115846,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.46166229110153},"htg":{"code":"HTG","alphaCode":"HTG","numericCode":"332","name":"Haitian gourde","rate":167.80384761449,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.005959338919912},"ang":{"code":"ANG","alphaCode":"ANG","numericCode":"532","name":"Neth. Antillean Guilder","rate":2.2821042484193,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.43819207676101},"lbp":{"code":"LBP","alphaCode":"LBP","numericCode":"422","name":"Lebanese Pound","rate":19059.387349969,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":5.2467583644635e-5},"myr":{"code":"MYR","alphaCode":"MYR","numericCode":"458","name":"Malaysian Ringgit","rate":5.9074863231401,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.1692767355352},"irr":{"code":"IRR","alphaCode":"IRR","numericCode":"364","name":"Iranian rial","rate":53316.284122693,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":1.8755995779803e-5},"uyu":{"code":"UYU","alphaCode":"UYU","numericCode":"858","name":"Uruguayan Peso","rate":50.025376295069,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.01998985463101},"jod":{"code":"JOD","alphaCode":"JOD","numericCode":"400","name":"Jordanian Dinar","rate":0.9041495210761,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":1.1060117565619},"php":{"code":"PHP","alphaCode":"PHP","numericCode":"608","name":"Philippine Peso","rate":71.27663531696,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.014029842956996},"xof":{"code":"XOF","alphaCode":"XOF","numericCode":"952","name":"West African CFA Franc","rate":762.34079242625,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0013117492989157},"lyd":{"code":"LYD","alphaCode":"LYD","numericCode":"434","name":"Libyan Dinar","rate":6.0494967692934,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.16530300587578},"nzd":{"code":"NZD","alphaCode":"NZD","numericCode":"554","name":"New Zealand Dollar","rate":2.0416204956893,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.48980699503724},"try":{"code":"TRY","alphaCode":"TRY","numericCode":"949","name":"Turkish Lira","rate":38.325338164731,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.026092398603289},"ngn":{"code":"NGN","alphaCode":"NGN","numericCode":"566","name":"Nigerian Naira","rate":1103.4314657502,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.00090626380617138},"rsd":{"code":"RSD","alphaCode":"RSD","numericCode":"941","name":"Serbian Dinar","rate":134.94286000113,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0074105439887045},"nok":{"code":"NOK","alphaCode":"NOK","numericCode":"578","name":"Norwegian Krone","rate":13.118062309699,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.07623077070313},"qar":{"code":"QAR","alphaCode":"QAR","numericCode":"634","name":"Qatari Rial","rate":4.6483473877318,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.21513022082628},"czk":{"code":"CZK","alphaCode":"CZK","numericCode":"203","name":"Czech Koruna","rate":28.756236000163,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.034775065832481},"byn":{"code":"BYN","alphaCode":"BYN","numericCode":"933","name":"Belarussian Ruble","rate":4.1722781165871,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.23967721519437},"ars":{"code":"ARS","alphaCode":"ARS","numericCode":"032","name":"Argentine Peso","rate":1039.944891518,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.00096158941512783},"ves":{"code":"VES","alphaCode":"VES","numericCode":"928","name":"Venezuelan Bolivar","rate":45.798564277846,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.021834745603231},"bdt":{"code":"BDT","alphaCode":"BDT","numericCode":"050","name":"Bangladeshi taka","rate":139.71276420142,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0071575421595575},"ron":{"code":"RON","alphaCode":"RON","numericCode":"946","name":"Romanian New Leu","rate":5.7938793722945,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.17259593024699},"mdl":{"code":"MDL","alphaCode":"MDL","numericCode":"498","name":"Moldova Lei","rate":22.613073715542,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.044222205816836},"crc":{"code":"CRC","alphaCode":"CRC","numericCode":"188","name":"Costa Rican Col\u00f3n","rate":662.81448375351,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.00150871778531},"aed":{"code":"AED","alphaCode":"AED","numericCode":"784","name":"U.A.E Dirham","rate":4.6699421337736,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.21413541567632},"idr":{"code":"IDR","alphaCode":"IDR","numericCode":"360","name":"Indonesian Rupiah","rate":19844.327569644,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":5.0392234077496e-5},"mxn":{"code":"MXN","alphaCode":"MXN","numericCode":"484","name":"Mexican Peso","rate":21.526535129509,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.046454294385221},"amd":{"code":"AMD","alphaCode":"AMD","numericCode":"051","name":"Armenia Dram","rate":513.85378337525,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0019460788892737},"pyg":{"code":"PYG","alphaCode":"PYG","numericCode":"600","name":"Paraguayan Guaran\u00ed","rate":9304.1878060284,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.00010747848397386},"brl":{"code":"BRL","alphaCode":"BRL","numericCode":"986","name":"Brazilian Real","rate":6.1951295567237,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.16141712466928},"inr":{"code":"INR","alphaCode":"INR","numericCode":"356","name":"Indian Rupee","rate":105.73000139558,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0094580534077417},"npr":{"code":"NPR","alphaCode":"NPR","numericCode":"524","name":"Nepalese Rupee","rate":169.90516821302,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0058856361493738},"xaf":{"code":"XAF","alphaCode":"XAF","numericCode":"950","name":"Central African CFA Franc","rate":762.34079242625,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0013117492989157},"kgs":{"code":"KGS","alphaCode":"KGS","numericCode":"417","name":"Kyrgyzstan Som","rate":113.08806563142,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0088426660622102},"dkk":{"code":"DKK","alphaCode":"DKK","numericCode":"208","name":"Danish Krone","rate":8.6856018600915,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.11513306919982},"lkr":{"code":"LKR","alphaCode":"LKR","numericCode":"144","name":"Sri Lanka Rupee","rate":412.98224349453,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0024214116121272},"tnd":{"code":"TND","alphaCode":"TND","numericCode":"788","name":"Tunisian Dinar","rate":3.906288131331,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.25599750104949},"vnd":{"code":"VND","alphaCode":"VND","numericCode":"704","name":"Vietnamese Dong","rate":31108.197962035,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":3.214586718332e-5},"tmt":{"code":"TMT","alphaCode":"TMT","numericCode":"934","name":"New Turkmenistan Manat","rate":4.4430318609883,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.22507153477346},"pkr":{"code":"PKR","alphaCode":"PKR","numericCode":"586","name":"Pakistani Rupee","rate":357.52391440488,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0027970156952006},"bgn":{"code":"BGN","alphaCode":"BGN","numericCode":"975","name":"Bulgarian Lev","rate":2.2785791053835,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.43886999474248},"rub":{"code":"RUB","alphaCode":"RUB","numericCode":"643","name":"Russian Rouble","rate":112.70779326829,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.008872500924755},"gel":{"code":"GEL","alphaCode":"GEL","numericCode":"981","name":"Georgian lari","rate":3.4116042118663,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.29311723690626},"sar":{"code":"SAR","alphaCode":"SAR","numericCode":"682","name":"Saudi Riyal","rate":4.7754225414751,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.20940555339656},"pln":{"code":"PLN","alphaCode":"PLN","numericCode":"985","name":"Polish Zloty","rate":5.0820371302802,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.19677148638717},"kzt":{"code":"KZT","alphaCode":"KZT","numericCode":"398","name":"Kazakhstani Tenge","rate":576.50195433805,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0017345994969752},"cop":{"code":"COP","alphaCode":"COP","numericCode":"170","name":"Colombian Peso","rate":4997.678021524,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.00020009292229175},"bhd":{"code":"BHD","alphaCode":"BHD","numericCode":"048","name":"Bahrain Dinar","rate":0.47947238469715,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":2.0856258502388},"egp":{"code":"EGP","alphaCode":"EGP","numericCode":"818","name":"Egyptian Pound","rate":39.392429101594,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.025385588622143},"krw":{"code":"KRW","alphaCode":"KRW","numericCode":"410","name":"South Korean Won","rate":1674.6557007118,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.00059713766810393},"dzd":{"code":"DZD","alphaCode":"DZD","numericCode":"012","name":"Algerian Dinar","rate":170.43344619863,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.0058673929460685},"pab":{"code":"PAB","alphaCode":"PAB","numericCode":"590","name":"Panamanian Balboa","rate":1.2749178626337,"date":"Sat, 13 Jan 2024 11:55:01 GMT","inverseRate":0.78436425538365}};
        
 


    Object.keys(jsonData).forEach(currency => {
        var option = document.createElement('option');
        option.value = currency;
        option.text = currency;
        fromCurrencyDropdown.add(option);

        option = document.createElement('option');
        option.value = currency;
        option.text = currency;
        toCurrencyDropdown.add(option);
    });

    // Set default currencies and update exchange rate display
    fromCurrencyDropdown.value = 'usd';
    toCurrencyDropdown.value = 'eur';
    updateExchangeRate();
});

// function updateExchangeRate() {
//     var toCurrency = document.getElementById('toCurrency');
//     var exchangeRateDisplay = document.getElementById('exchange-rate-display');

//     if (fromCurrencyDropdown && toCurrency && exchangeRateDisplay) {
//         var selectedFromCurrency = fromCurrencyDropdown.value;
//         var selectedToCurrency = toCurrency.value;

//         // Display the exchange rate
//         exchangeRateDisplay.textContent = 'Current Exchange Rate: 1 ' + selectedFromCurrency +
//             ' = ' + jsonData[selectedToCurrency].rate.toFixed(4) + ' ' + selectedToCurrency;
//     } else {
//         alert('Error: Elements not found.');
//     }
// }
function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var errorMessage = document.getElementById('error-message');
    var resultDisplay = document.getElementById('result');
    var datesDisplay = document.getElementById('dates');
    var upperLimit = 100000; 

    if (amount <= 0 || isNaN(amount)) {
        errorMessage.textContent = 'Please enter a valid source amount.';
        return;
    }

    if (amount > upperLimit) {
        errorMessage.textContent = 'Source amount exceeds the upper limit.';
        return;
    }


    var exchangeRate = jsonData[toCurrency].rate / jsonData[fromCurrency].rate;
    var result = amount * exchangeRate;

    var timestamp = new Date().toLocaleString('en-GB', { timeZone: 'GMT' });
    var lastUpdateDate = new Date(jsonData[fromCurrency].date).toLocaleString('en-GB', { timeZone: 'GMT' });

    resultDisplay.innerHTML = 'Converted Amount: ' + result.toFixed(2) + ' ' + toCurrency;
    datesDisplay.innerHTML = 'Calculation Date: ' + timestamp + '<br>Last Exchange Rate Update: ' + lastUpdateDate;

    errorMessage.textContent = ''; 

    // Display exchange rate function
function displayExchangeRate() {
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var exchangeRateDisplay = document.getElementById('exchangeRateDisplay');

    // Display the exchange rate
    exchangeRateDisplay.textContent = 'Current Exchange Rate: 1 ' + fromCurrency + ' = ' + jsonData[toCurrency].rate + ' ' + toCurrency;
}}



    