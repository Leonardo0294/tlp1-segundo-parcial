const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
const reservaRoutes = require('./routes/reserva-routes');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api','reservaRoutes');
app.use('/api', require('./routes/reserva.routes'));
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });

});
const port = 45635; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



























