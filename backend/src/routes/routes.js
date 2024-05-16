const express = require("express");
const bcrypt = require("bcrypt");
const { criarUsuario } = require("../models/userDb");
const routes = express.Router();


routes.post("/api/cadastro_usuario", async (req, res)=>{
    try{
        const passwordHash = await bcrypt.hash(req.body.senha, 8);
        const cfpHash = await bcrypt.hash(req.body.cpf, 8);
        await criarUsuario(req.body.nome, req.body.email, passwordHash, req.body.telefone, cfpHash, req.body.cep, req.body.dataNasc,
            req.body.sexo, req.body.uf, req.body.cidade, req.body.rua, req.body.numero, req.body.bairro, req.body.termos);
        
        res.status(200).json({redirect: "http://localhost:3000/login"});
    }
    catch(e){
        console.log(e)
        res.status(500).send('Ocorreu um erro ao criar o usuário');
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