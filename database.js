require('dotenv').config();
const mysql = require('mysql2');
function connectDatabase() {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  
    connection.connect((err) => {
      if (err) {
        console.error('Error al conectar a la Base de Datos:', err);
        return;
      }
      console.log('Conexión exitosa a la Base de Datos');
    });
  
    return connection;
  }
  module.exports = connectDatabase;