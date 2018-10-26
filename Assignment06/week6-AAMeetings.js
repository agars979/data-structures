const { Client } = require('pg');
const cTable = require('console.table');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'agars979';
db_credentials.host = 'agars979.c8qzmmsw5czy.us-east-1.rds.amazonaws.com';
db_credentials.database = 'agars979';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

var thisQuery = "SELECT address, lat, long FROM aalocations WHERE lat = '40.805958';";

client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
        console.table(res.rows);
        client.end();
    }
});