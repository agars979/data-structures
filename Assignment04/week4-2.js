const { Client } = require('pg');
var async = require('async');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'agars979';
db_credentials.host = 'agars979.c8qzmmsw5czy.us-east-1.rds.amazonaws.com';
db_credentials.database = 'agars979';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var addressesForDb = require("../Assignment03/location.json")

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.streetAddress.streetAddress + "', " + value.latLong.lat + ", " + value.latLong.long + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 
