const express = require('express');
const app = express();
const port = 3030;
const path = require('path');


//recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//rutas
app.get('/', (req,res)=> res.sendFile(path.resolve(__dirname,'views','home.html')));

//servidor
app.listen(port, ()=> console.log(`Servidor corriendo en http://localhost:${port}`));