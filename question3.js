// Print the following details name, capital, flag, using forEach function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    result.forEach(country => {
        console.log('Name:', country.name.common);
        console.log('Capital:', country.capital?.[0] || 'N/A');
        console.log('Flag:', country.flags.svg);
        console.log('---');
      });
    }
