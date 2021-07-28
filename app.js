const express = require('express')
const expressSession = require('express-session')
const db = require('./dbConnection')

const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))
app.use(expressSession({
  secret: 'key-session',
  resave: false,
  saveUninitialized: false
}))

// Rotas
// ---------------------------------------------
app.get('/', (req, res) => {
  res.render('index')
});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
});