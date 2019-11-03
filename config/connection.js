// Connect to MySQL
var mysql = require("mysql");
const dotenv = require("dotenv").config();
var connection;


if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: 'c7j8wieonzzu0y95',
    passwod: 'z9jgugvdg9xchwh6',
    database: "aclg4v4ro3y2o922"
  })
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;
