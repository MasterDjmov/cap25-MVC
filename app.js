const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });

//incorporo la ruta
const mainRouter = require('./routers/main');


app.use('/',mainRouter);