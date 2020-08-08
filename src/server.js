//servidor
const express  = require('express')
const server = express()

const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

//inicio e configuração do servidor 
server
//receber os dados do body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start de sorvidor na porta
.listen(5500)
