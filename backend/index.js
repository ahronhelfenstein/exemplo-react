var express = require('express');
var exec = require('child_process').exec;
var bodyParser = require('body-parser')
const allowCors = require('./cors')
var app = express();
var usuarios =[
    {id: 1,nome: "Ahron",sobrenome: "Helfenstein", email: "ahron.helfenstein@gmail.com"},
    {id: 2,nome: "Ben",sobrenome: "Hur", email: "ben-hur@gmail.com"},        
]

app.use(allowCors)
app.use( bodyParser.json() );  
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.get('/usuarios', function(req, res){
    setTimeout(()=>{
      res.send(usuarios);
    },3000)
  });

  app.post('/usuarios', function(req, res){
    var usuario = req.body
    var maxId = usuarios.reduce(function (maxId, item) {
        return Math.max(maxId, item.id)
    }, Number.MIN_VALUE);
    var newId = (maxId + 1)
    usuario.id = newId
    usuarios.push(usuario)
    res.status(200).end();
  });

var port = process.env.PORT || 5000;

server = app.listen(port, function () {
  console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
});