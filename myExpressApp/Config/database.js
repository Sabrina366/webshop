
let Mysqli = require('mysqli')


// one config
let conn = new Mysqli({
  host: 'localhost', // IP/domain  
  port: 3306, //port, default 3306  
  user: 'newuser', // username
  passwd: 'password', // password
  charset: '', // CHARSET of database, default to utf8 【optional】
  db: 'market' // the default database name  【optional】
})

let db = conn.emit( false, '');

module.exports = {
    database: db
};