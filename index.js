const express = require ('express');
const app = express();


app.use(express.json());


const apiMusica = require('./routes/apiMusica');
app.use('/api/musica', apiMusica);




