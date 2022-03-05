const express = require('express')
const route = require('./route')
const path = require('path')

const server = express() /*inicia o express*/

server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(express.urlencoded({extended: true})) //decodifica a rota e manda para o controller (middleware)

server.use(route)
server.listen(3000, ()=> console.log('rodando!'))

