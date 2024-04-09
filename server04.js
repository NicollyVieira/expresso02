//exercicio simples com parâmetros

const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("Servidor em execução")
});

//dados dos clientes

const clientes = [
    { id: 1, nome: "Alex", telefone: '91234-5678', email: 'alex@gmail.com' },

    { id: 2, nome: "Bruna", telefone: '92556-4865', email: 'bruna@gmail.com' },

    { id: 3, nome: "Carol", telefone: '91589-4598', email: 'carol@gmail.com' },

    { id: 4, nome: "Daniel", telefone: '95863-0324', email: 'daniel@gmail.com' },

    { id: 5, nome: "Felipe", telefone: '94789-4893', email: 'felipe@gmail.com' }

];

//rotas

app.get('/', (req, res) => {

    res.send("Api de clientes");

});

//rota com total de clientes

app.get('/total_clientes', (req, res) => {

    res.send("O total de clientes: " + clientes.length);

});

//rota para apresentar os clientes
app.get('/clientes/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id))

//se não existir o cliente 
    if (!cliente) res.status(404).send('Cliente não encontrado.')



// o cliente existe vamos apresentar as informações dele
res.send(`O cliente é: ${cliente.nome}, O telefone é: ${cliente.telefone}, O email é: ${cliente.email}`)
});