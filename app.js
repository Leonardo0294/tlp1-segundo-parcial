const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();

// Middlewares
app.use(cors()); // Habilita CORS para permitir solicitudes desde cualquier origen
app.use(express.json()); // Permite el manejo de JSON en las solicitudes

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// Middleware para manejar el error 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

// Starting the server
const port = 45635; // Puerto 45635

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






