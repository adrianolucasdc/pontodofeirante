const express = require("express");
const jwt = require("jsonwebtoken");

const { criarUsuario } = require("../caseUse/userDb");
const routes = express.Router();


routes.post("/api/cadastro_usuario", async (req, res)=>{
    try{
        await criarUsuario(req.body.nome, req.body.email, req.body.senha, req.body.telefone, req.body.cpf, req.body.cep, req.body.dataNasc,
            req.body.sexo, req.body.uf, req.body.cidade, req.body.rua, req.body.numero, req.body.bairro, req.body.termos);
        
        res.status(200).json({redirect: "http://localhost:3000/login"});
    }
    catch(e){
        console.log(e)
        res.status(500).send('Ocorreu um erro ao criar o usuário');
    }
})



routes.post("/api/login_auth")

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