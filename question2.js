// Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    const countriesWithLowPopulation = result.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', countriesWithLowPopulation);
    }
