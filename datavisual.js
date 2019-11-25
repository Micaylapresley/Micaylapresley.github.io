$.get("https://zagster-service.herokuapp.com/rides/count/per_year", function(data) {
    var jsonData = json.parse(data);
    console.log(jsonData);
});