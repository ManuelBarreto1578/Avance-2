const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
  username: String,
  password: String,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/iniciar-sesion', async (req, res) => {
  const { username, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ username, password });
    if (usuario) {
      res.send('Inicio de sesión exitoso.');
    } else {
      res.status(401).send('Credenciales incorrectas.');
    }
  } catch (error) {
    res.status(500).send('Error en el servidor.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

