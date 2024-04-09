//exercicio simples com parâmetros

const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("Servidor na área")
});

const funcoes=require("./functions.js");


app.get('/add/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado = funcoes.add(a,b);
    res.send(`A soma de ${a} e ${b} é igual a ${resultado}`)
})

app.get('/add/:a-:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado_sub = funcoes.sub(a,b);
    res.send(`A subtração de ${a} e ${b} é igual a ${resultado_sub}`)
})


app.get('/add_div/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado_div = funcoes.div(a,b);
    res.send(`A subtração de ${a} e ${b} é igual a ${resultado_div}`)
})

app.get('/add_multi/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado_multi = funcoes.multi(a,b);
    res.send(`A subtração de ${a} e ${b} é igual a ${resultado_multi}`)
})