const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-374da5a9-oviedomariam2007-e04.g.aivencloud.com',
    user: 'avnadmin',
    password: 'redacted', 
    database: 'defaultdb',
    port: 16403,
    ssl: {
        rejectUnauthorized: false
    }
});

connection.connect(err => {
    if (err) {
        console.error('Error conectando a la nube:', err.message);
        return;
    }
    console.log('¡Conectado a la base de datos de Aiven!');
});

module.exports = connection;
