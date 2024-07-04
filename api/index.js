// Importar clases de express
const express = require('express');
// Creamos la app
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req,res)=>{
    res.send("Hola Caracola");
});

app.listen(port, ()=>{
    console.log(`Server ejecutando en el puerto ${port}`);
});

