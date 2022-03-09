const express = require('express');
const questionController = require('./controllers/QuestionController')
const roomController = require('./controllers/RoomController')

const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}) )
route.get('/create-pass', (req, res) => res.render(/* "create-pass" */"index", {page: 'create-pass'} ))
route.post('/create-room',roomController.create)

route.get('/room/:room', (req, res) => res.render("room") )
//numero da sala, numero da questao, tipo da acao do botao - envia para a rota
//formato que o formulario de dentro da modal envia a informaçao
route.post('/question/:room/:question/:action', questionController.index)

module.exports = route