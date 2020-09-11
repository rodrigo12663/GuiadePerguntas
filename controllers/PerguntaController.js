
const Pergunta = require('../database/model/Pergunta');
const Resposta = require('../database/model/Resposta');

module.exports = {
    async buscar(request, response) {
            Pergunta.findAll({raw:true,order:[
                ['id','DESC']
            ]}).then(perguntas =>{
                response.render("index",{
                    perguntas:perguntas
                });
            });
            
    },
    async index(request, response) {
        var id = request.params.id;
        Pergunta.findOne({
            where:{id:id}
        }).then(pergunta =>{
            if(pergunta != undefined){
                Resposta.findAll({
                    where:{perguntaId: pergunta.id},
                    order:[
                        ['id','DESC']
                    ]
                }).then(respostas=>{
                    response.render("pergunta",{
                        pergunta:pergunta ,
                        respostas:respostas
                    });
                })

                
            }
            else{
                response.redirect('/')
            }
        })
    },
    async create(request,response){
        var titulo = request.body.titulo;
        var descricao = request.body.descricao;
        Pergunta.create({
              titulo:titulo,
              descricao:descricao
        }).then(()=>{
              response.status(201).json("ff");
        })
    }
}
