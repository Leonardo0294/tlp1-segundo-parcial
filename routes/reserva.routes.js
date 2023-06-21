const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reserva.controllers');

// Rutas para renderizar vistas
// ...

// Rutas para CRUD de reservas
router.post('/reservas', reserva.reservaControllers.createReserva);
router.get('/reservas', reserva.controllers.getReservas);
router.get('/reservas/:id', reserva.controllers.getReservaById);
router.put('/reservas/:id', reserva.controllers.updateReserva);
router.delete('/reservas/:id', reserva.controllers.deleteReserva);

// ...

module.exports = router;




