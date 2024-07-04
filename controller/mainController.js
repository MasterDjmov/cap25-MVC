const express = require('express');
const path = require('path');
const app = express();

const controlador ={
    index: (rep, res)=>{
        res.sendFile(path.resolve(__dirname,'../views/home.html'));
    },
    about:(rep, res)=>{
        res.sendFile(path.resolve(__dirname,'../views/about.html'));
    }
}

module.exports = controlador;