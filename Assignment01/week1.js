var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m01.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone01.txt', body);
    }
    else {console.log("Request failed!")}
});

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m02.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone02.txt', body);
    }
    else {console.log("Request failed!")}
});

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m03.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone03.txt', body);
    }
    else {console.log("Request failed!")}
});

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m04.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone04.txt', body);
    }
    else {console.log("Request failed!")}
});

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m05.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone05.txt', body);
    }
    else {console.log("Request failed!")}
});

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m06.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone06.txt', body);
    }
    else {console.log("Request failed!")}
});

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m07.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone07.txt', body);
    }
    else {console.log("Request failed!")}
});

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m08.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone08.txt', body);
    }
    else {console.log("Request failed!")}
});

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m09.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone09.txt', body);
    }
    else {console.log("Request failed!")}
});

var request = require('request');
var fs = require('fs');

request('https://parsons.nyc/aa/m10.html', function(error, response, body){
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/zone10.txt', body);
    }
    else {console.log("Request failed!")}
});