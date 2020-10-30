var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat',
  multipleStatements: true
});


connection.connect((err) => {
  if (err) { throw err; }
  console.log('Connected to database');
});

// connection.query(`SELECT * FROM rooms;`, (err, results, fields) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('results:', results);
//   }
// });

module.exports = connection;

