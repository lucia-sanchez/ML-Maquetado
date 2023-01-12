const express = require('express');
const app = express();
const port = 3030;
const path = require('path');


//recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//rutas
app.get('/', (req,res)=> res.sendFile(path.resolve(__dirname,'views','home.html')));
app.get('/login', (req,res)=> res.sendFile(path.resolve(__dirname,'views','login.html')));
app.get('/register', (req,res)=> res.sendFile(path.resolve(__dirname,'views','register.html')));

//servidor
app.listen(port, ()=> console.log(`Servidor corriendo en http://localhost:${port}`));