// Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    const totalPopulation = result.reduce((acc, country) => acc + (country.population || 0), 0);
    console.log('Total population of countries:', totalPopulation);
    }
