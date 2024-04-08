const express = require('express');

const app = express();

app.listen(3000,()=>{
    console.log("Servidor em execução")
});

//rotas
app.get('/',(req,res)=>{
    res.send("Teste")
})

//rota com 1 parâmetro
app.get('/ola/nome',(req,res)=>{
    res.send("Teste2");
    res.send(req.params.nome);
})
