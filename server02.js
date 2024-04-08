const express = require('express');

var morgan = require('morgan');

const server = express();

server.listen(3000);

//criar arquivo de logs 

// server.use(morgan('tiny'));

server.use(morgan('Método = :method | Status = :stats | Url= :url'));

server.get('/',(req,res)=>{
    server.send("Teste")
})