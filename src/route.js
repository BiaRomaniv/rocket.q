const express = require('express');
const route = express.Router();
const questionController = require('./controllers/QuestionController')
const roomController = require('./controllers/RoomController')

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}) )
route.get('/create-pass', (req, res) => res.render(/* "create-pass" */"index", {page: 'create-pass'} ))

route.get('/room/:room', (req, res) => res.render("room") )
//numero da sala, numero da questao, tipo da acao do botao - envia para a rota
//formato que o formulario de dentro da modal envia a informaçao
route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create)

module.exports = route