const express = require('express');
const route = express.Router();
const questionController = require('./controllers/QuestionController')

route.get('/', (req, res) => res.render("index") )
route.get('/room', (req, res) => res.render("room") )
route.get('/create-pass', (req, res) => res.render("create-pass") )

//numero da sala, numero da questao, tipo da acao do botao - envia para a rota
//formato que o formulario de dentro da modal envia a informaçao
route.post('/room/:room/:question/:action', questionController.index)

module.exports = route