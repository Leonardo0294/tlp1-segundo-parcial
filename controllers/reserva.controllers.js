

const reserva = require('../models/reserva');
exports.createReserva = async (req, res) => {
  try {
   
    const { quienRealiza, codigoReserva, fecha } = req.body;


    const reserva = new Reserva({
      quienRealiza,
      codigoReserva,
      fecha,
    });

    
    await reserva.save();

    res.status(201).json(reserva);
  } catch (error) {
    
    res.status(500).json({ error: 'Error al crear la reserva' });
  }
};


exports.getReservas = async (req, res) => {
  try {
    // Obtener reservas de la Base de Datos
    const reservas = await Reserva.find();

    
    res.json(reservas);
  } catch (error) {
    
    res.status(500).json({ error: 'Error al obtener las reservas' });
  }
};


exports.getReservaById = async (req, res) => {
  try {
    
    const reservaId = req.params.id;

    
    const reserva = await Reserva.findById(reservaId);

    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }

    
    res.json(reserva);
  } catch (error) {

    res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};


exports.updateReserva = async (req, res) => {
  try {
    
    const reservaId = req.params.id;


    const { quienRealiza, codigoReserva, fecha } = req.body;

    
    const reserva = await Reserva.findByIdAndUpdate(
      reservaId,
      { quienRealiza, codigoReserva, fecha },
      { new: true }
    );

    
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }

 
    res.json(reserva);
  } catch (error) {
    
    res.status(500).json({ error: 'Error al actualizar la reserva' });
  }
};


exports.deleteReserva = async (req, res) => {
    try {
    
      const reservaId = req.params.id;
  
      
      const reserva = await Reserva.findByIdAndDelete(reservaId);
  
    
      if (!reserva) {
        return res.status(404).json({ error: 'Reserva no encontrada' });
      }
  
    
      res.json({ message: 'Reserva eliminada exitosamente' });
    } catch (error) {
      
      res.status(500).json({ error: 'Error al eliminar la reserva' });
    }
  };
  module.exports = reserva;