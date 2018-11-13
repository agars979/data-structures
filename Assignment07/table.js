const { Client } = require('pg');
var async = require('async');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'agars979';
db_credentials.host = 'aameetings.c8qzmmsw5czy.us-east-1.rds.amazonaws.com';
db_credentials.database = 'agars979';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// console.log(process.env.AWSRDS_PW)

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
var thisQuery = "CREATE TABLE aameetings (address varchar(100), lat double precision, long double precision, title varchar(100), day varchar(100), startTime varchar(100), endTime varchar(100), meetingType varchar(100), wheelchairAccess boolean);";
// Sample SQL statement to delete a table: 
// var thisQuery = "DROP TABLE aameetings;"; 
// Sample SQL statement to query the entire contents of a table: 
// var thisQuery = "SELECT * FROM aameetings;";

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});