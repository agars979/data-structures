// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

var content = fs.readFileSync('../Assignment01/zone09.txt');

var $ = cheerio.load(content);

var address = [];

$('tbody').last().find('tr').each(function(i, elem) {
    $(elem).find('td').first().contents().each(function(index, item) {
        if (index >5 && index <7) {
            var parts = $(item).text().trim().split(",");
            var entry = parts[0];
            var location = new Object();
            location.streetAddress = entry;
            address.push(location);
        }
    });
});

fs.writeFileSync("./address.json", JSON.stringify(address));