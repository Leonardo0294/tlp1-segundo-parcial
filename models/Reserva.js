const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Reserva = sequelize.define('Reserva', {
  quienRealiza: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigoReserva: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Reserva;