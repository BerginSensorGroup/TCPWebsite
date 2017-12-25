var mysql = require('mysql');
var exports = module.exports;
var connection;

exports.parse_string = function(data, callback){
  var connection = mysql.createConnection({
    host     : 'berginlabdb.cyatkbygf3ox.us-east-1.rds.amazonaws.com',
    port     : '3306',
    user     : 'berginlab',
    password : 'Mike*sandals',
    database : 'testair'
  });

  
}
