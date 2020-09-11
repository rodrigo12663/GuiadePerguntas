const express = require("express");

const app = express.Router();
const Sequelize = require('sequelize');
const Pergunta = require('../database/model/Pergunta');
const PerguntaController = require('../controllers/PerguntaController');
const RespostaController = require('../controllers/RespostaController');



app.get("/",PerguntaController.buscar);
app.get("/perguntar",(request,response)=>{  
     response.render("perguntar");
  });
app.get("/perguntar/:id",PerguntaController.index);
app.post("/salvarPergunta",PerguntaController.create);

app.post("/responder",RespostaController.create);
module.exports = app;