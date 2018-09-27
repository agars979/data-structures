var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');

var apiKey = process.env.TAMU_KEY; 

var meetingsData = [];
var addresses = require("../Assignment02/address.json");

// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
    apiRequest += 'streetAddress=' + value.streetAddress.split(' ').join('%20');
    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
    apiRequest += '&format=json&version=4.01';
    
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        else {
            var tamuGeo = JSON.parse(body);
            var output = tamuGeo.OutputGeocodes[0].OutputGeocode;
            var address = new Object();
            address.streetAddress = value;
            address.latLong = new Object();
            address.latLong.lat = output.Latitude;
            address.latLong.long = output.Longitude;
            meetingsData.push(address);
        }
    });
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('Assignment03/location.json', JSON.stringify(meetingsData));
    //console.log('*** *** *** *** ***');
    //console.log('Number of meetings in this zone: ');
    //console.log(meetingsData.length);
});