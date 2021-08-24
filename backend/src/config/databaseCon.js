const mysql = require('mysql');

module.exports = () => {
return mysql.createConnection({ host: "localhost",
    user:'acollaguazo', password: 'adita', database:'espol_assr',
    });
}
