const express = require("express");
const jwt = require("jsonwebtoken");

const { criarUsuario } = require("../DataBaseControllers/userDb");
const { criarLoja } = require("../DataBaseControllers/storeDb");
const routes = express.Router();


routes.post("/api/cadastro_usuario", async (req, res)=>{
    try{
        const createUser = await criarUsuario(req.body.nome, req.body.email, req.body.senha, req.body.telefone, req.body.cpf, req.body.cep, req.body.dataNasc,
            req.body.sexo, req.body.uf, req.body.cidade, req.body.rua, req.body.numero, req.body.bairro, req.body.termos);
        
        if (createUser){
            res.status(500).json(createUser);
        } else {
            res.status(200).json({redirect: "http://localhost:3000/login"});
        }
    }
    catch(e){
        console.log(e)
        res.status(500).send('Ocorreu um erro ao criar o usuário');
    }
})

routes.post("/api/login_auth", async (req, res)=>{
    
})

routes.post("/api/cadastro_loja", async (req, res)=>{
    const body = req.body;
    try{
        const createStore = await criarLoja(body.nome, body.razao, body.cnpj, body.senha, body.email,
            body.telefone, body.zap, body.termos);

        if (createStore) {
            res.status(500).json(createStore);
        } 
        else {
            res.status(200).json({redirect: "http://localhost:3000/login"});
        }
    }
    catch(e){
        console.log(e)
        res.status(500).send('Ocorreu um erro ao criar o loja');
    }
})

routes.post("/api/login_usuario", (req, res)=>{
    
})

routes.post("/api/login_loja", (req, res)=>{
    
})



module.exports = routes;