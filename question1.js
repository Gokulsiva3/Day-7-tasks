// Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    const asiaCountries = result.filter(country => country.region?.includes('Asia'));
    console.log('Countries in Asia:', asiaCountries);

    }

    
