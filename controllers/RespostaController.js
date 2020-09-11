const Resposta = require('../database/model/Resposta');

module.exports = {
    async create(request, response){
        let corpo = request.body.corpo;
        let perguntaId = request.body.PerguntaId;
        Resposta.create({
            corpo:corpo,
            perguntaId:perguntaId
        }).then(()=>{
            response.redirect('/perguntar/'+perguntaId)
        })
    }
}