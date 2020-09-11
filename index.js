const express = require("express");
const routes = require('./src/routes.js');
const connection = require('./database/database');





connection.authenticate().then(()=>{
    console.log("conexão feita com o banco de dados");
})
.catch((err) =>{
    console.log(err);
});

const app = express();
const bodyParser = require("body-parser");

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.use(routes);
app.listen(8181,()=>{
    console.log("app rodando!");
});