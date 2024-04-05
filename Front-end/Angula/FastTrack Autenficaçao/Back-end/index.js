//Express -> Framework (comando para instalaçao: npm i express)
//Nodemin -> Executar projeto (npm i nodemon)

//Importaçoes
const express = require('express');

//Objeto app (respondavel pelas rotas)

const app = express();

//Rotas
app.get('/',function(req,res){
    res.write('Hello World!');
    res.end();
});

//Rota do servidor
app.listen(8080);

//Comando para executar node: nodemon index.js