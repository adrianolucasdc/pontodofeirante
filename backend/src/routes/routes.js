const express = require("express");
const jwt = require("jsonwebtoken");

const { criarUsuario, autenticarUsuario} = require("../DataBaseControllers/userDb");
const { criarLoja } = require("../DataBaseControllers/storeDb");
const routes = express.Router();

//Cadastro Usuário
routes.post("/api/cadastro_usuario", async (req, res)=>{
    try{
        const createUser = await criarUsuario(req.body.nome, req.body.email, req.body.senha, req.body.telefone, req.body.cpf, req.body.cep, req.body.dataNasc,
            req.body.sexo, req.body.uf, req.body.cidade, req.body.rua, req.body.numero, req.body.bairro, req.body.termos);

        if (createUser){
            res.status(500).json(createUser);
        } else {
            res.status(200).json({
                msg:"Usuário Cadastrado com Sucesso!",
                redirect: "http://localhost:3000/login"
            });
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg: "Aconteceu um erro tente novamente mais tarde!"})
    }
})

//Login Usuário
routes.post("/api/user_login_auth", async (req, res)=>{
    try{
        const {email, senha} = req.body;

        if (!email && !senha) {
            return res.status(422).json({msg : "Email e senha são obrigatórios!"})
        }

        const authUser = await autenticarUsuario(email, senha);

        if (authUser.erro){
            res.status(500).json(authUser);
        } else if (authUser.token) {
            res.status(200).json({
                msg: "Usuário Logado com Sucesso!",
                redirect: "http://localhost:3000/entrou",
                token: authUser.token,
                user: authUser.user
            });
        }


    } catch (e) {
        console.log(e);
        res.status(500).json({msg: "Aconteceu um erro tente novamente mais tarde!"})
    }
})

//Cadastro Loja 
routes.post("/api/cadastro_loja", async (req, res)=>{
    const body = req.body;
    try{
        const createStore = await criarLoja(body.nome, body.razao, body.cnpj, body.senha, body.email,
            body.telefone, body.zap, body.termos);

        if (createStore) {
            res.status(500).json(createStore);
        } 
        else {
            res.status(200).json({
                msg:"Loja Cadastrada com Sucesso!",
                redirect: "http://localhost:3000/login"});
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg: 'Aconteceu um erro tente novamente mais tarde!'});
    }
})




module.exports = routes;