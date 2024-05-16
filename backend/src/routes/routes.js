const express = require("express");
const { criarUsuario } = require("../models/userDb");
const routes = express.Router();


routes.post("/api/cadastro_usuario", async (req, res)=>{
    try{
        await criarUsuario(req.body.nome, req.body.email, req.body.senha, req.body.telefone, req.body.cpf, req.body.cep, req.body.dataNasc,
            req.body.sexo, req.body.uf, req.body.cidade, req.body.rua, req.body.numero, req.body.bairro)
    }
    catch(e){
        console.log(e)
    }
})

routes.get("/api/cadastro_loja", (req, res)=>{
    res.send("cadastro_loja");
})

routes.get("/api/login_usuario", (req, res)=>{
    res.send("login_usuario");
})

routes.get("/api/login_loja", (req, res)=>{
    res.send("login_loja");
})



module.exports = routes;