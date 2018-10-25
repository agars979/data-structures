const { Client } = require('pg');
var async = require('async');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'nataly';
db_credentials.host = 'mydb.cq2lipog5ub4.us-east-1.rds.amazonaws.com';
db_credentials.database = 'natalysdb';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var addressesForDb = require("../Assignment07/georesult10.json");

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aameetings VALUES (E'" + value.address + "', '" + value.latLong.lat + "', '" + value.latLong.lon + "', '" + value.title + "', '" + value.hours + "', " + value.wheelchairAccess + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1500); 
}); 