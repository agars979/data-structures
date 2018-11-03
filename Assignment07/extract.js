var fs = require('fs');
var cheerio = require('cheerio');
 // Focusing on zone 4 where the addresses are
var html = fs.readFileSync('../Assignment01/zone07.txt');
// Loading the selector from cheerio
var $ = cheerio.load(html);
 /*
 * The TRs we're looking for in the HTML all share a common attribute; style
 * I'm using that style attribute to make sure we're only selecting the 
 * TRs with the data we're looking for.
 * 
 * Inside of all those rows, we only need the first (of three) TDs.
 */
var selectionOfTheTD = $('tr[style="margin-bottom:10px"]');
 /*
This function converts the addresses from the TDs to text
*/
 function getAddressFromTD(index, element) {
    //The result of the function $ is being stored inside this variable.
    //The function $ is converting the html element to a cheerio element.
    //I am doing this because we wouldn't be able to use .text (see line below)
    //with an html element.
    var cheerioTRElement = $(element);
    
    //This variable holds the text content of the TD.
    //.text() is a method. It is getting the text content from cheerioTDElement.
    var TRTextContent = cheerioTRElement.text();
    
    // I noticed that the address was always on the fourth line of the String.
    //.split is a String method. See "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
    //I used .split to make the String into separate lines of text.
    var arrayOfLines = TRTextContent.split("\n");
    
    // I selected the fourth line (number 3) from the array created with 
    // .split above
    var addressLine = arrayOfLines[4];
    var titleLine = arrayOfLines[3];
    
    // Because there are so many indents, the .trim() method trims the excess
    // space of the indents.
    var address = addressLine.trim();
    var title = titleLine.trim();
    
    
    var secondTDElement = cheerioTRElement.find("td:nth-child(2)");
    
    var secondTDElementText = secondTDElement.text();
    
    var secondTDElementLinesArray = secondTDElementText.split("\n");
    
    secondTDElementLinesArray = secondTDElementLinesArray.map(function (string) {
        return string.trim();
    });
    
    secondTDElementLinesArray = secondTDElementLinesArray.filter(function (string) {
        return string.length > 0;
    });
        
    var day = secondTDElementLinesArray.join("\n").split(" ")[0];
    console.log(day);
    
    var startTime = secondTDElementLinesArray.join("\n").split(" ")[3].each(function(i, elem) + " " + secondTDElementLinesArray.join("\n").split(" ")[4].each(function(i, elem);
   
    var endTime = secondTDElementLinesArray.join("\n").split(" ")[6].each(function(i, elem) + " " + secondTDElementLinesArray.join("\n").split(" ")[7].each(function(i, elem);
    
    // var meetingTypeA = secondTDElementLinesArray.join("\n").split("Meeting")[1];
    // var meetingType = meetingTypeA.split("meeting")[0];
    // console.log(meetingType);
    
    // if(meetingType == undefined) {
    //  return '';
    //  } else {
    //   return  meetingType;
    //  }
    
    var meetingType = secondTDElementLinesArray.join("\n").split("Meeting").pop().each(function(i, elem);
    
    
    var wheelchairImage = cheerioTRElement.find("img");
    
    var wheelchairAccess;
    
    if (wheelchairImage.length > 0) {
        wheelchairAccess = true;
    } else {
        wheelchairAccess = false;
    }
    
 
    
    //Object with items returned from the functions.
    return {
        address: address,
        title: title,
        day: day,
        startTime: startTime,
        endTime: endTime,
        wheelchairAccess: wheelchairAccess 
    };
}
 // I'm using the cheerio methods .map() to loop over every TD selected on line 16
// converting them using the getAddressFromTD function.
var result = selectionOfTheTD.map(getAddressFromTD).get();
 //Creating a JSON file, which keeps the lines organized with indent 4.
//For the next assignment the json file is easier to work with.
fs.writeFileSync('./result07.json', JSON.stringify(result, null, 4));