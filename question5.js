// Print the country that uses US dollars as currency.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    const countryWithUSD = result.find(country => country.currencies && country.currencies.USD);
    console.log('Country using US dollars as currency:', countryWithUSD);
    }
