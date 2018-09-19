// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

var content = fs.readFileSync('../Assignment01/zone09.txt');

var $ = cheerio.load(content);

var address = "";

$('tbody').last().find('tr').each(function(i, elem) {
    $(elem).find('td').first().contents().each(function(index, item) {
        if (index >5 && index <9) {
            address += ($(item).text());
        }
    });
});

fs.writeFileSync("./address.txt", address);