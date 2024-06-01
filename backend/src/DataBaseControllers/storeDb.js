const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cuid = require("cuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


async function criarLoja(nome,razao,cnpj,senha,email,telefone,celular,termos){
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(senha, salt);

    const telefoneSemMascara = String(telefone).replace(/\D/g,"");
    const celularSemMascara = String(celular).replace(/\D/g,"");
    const cnpjSemMascara = String(cnpj).replace(/\D/g,"");


    const [existEqualCnpj, existEqualEmail, existEqualTelefone, existEqualCelular] =
    await Promise.all([
        prisma.loja.findUnique({where:{ cnpj:cnpjSemMascara }}),
        prisma.loja.findUnique({where:{ email:email }}),
        prisma.loja.findUnique({where:{ telefone:telefoneSemMascara }}),
        prisma.loja.findUnique({where:{ celular:celularSemMascara }}),
    ])

    if (existEqualCnpj){
        return {existe: "cnpj"};
    } else if (existEqualEmail){
        return {existe: "email"};
    } else if (existEqualTelefone){
        return {existe: "telefone"};
    } else if (existEqualCelular){
        return {existe: "celular"};
    } else {
        const create_store = await prisma.loja.create({
            data:{
                id : cuid(),
                nome: nome,
                razao: razao,
                cnpj: cnpjSemMascara,
                senha: passwordHash,
                email: email,
                telefone: telefoneSemMascara,
                celular: celularSemMascara,
                termos: termos,
            }
        }).catch((error) => {
            console.log("Erro ao criar loja:", error);
            return {msg: "Ocorreu um erro"}
        });
    }
}

async function autenticarLoja(email, senha){

    const store = await prisma.loja.findUnique({
        where: {
            email: String(email),
        }
    });

    if (store) {
        const authHash = await bcrypt.compare(senha, store.senha);

        if (authHash) {
            const secret = process.env.SECRET

            const token = jwt.sign({
                id: store.id,
                name: store.nome,
                email: store.email
            }, secret, {expiresIn: 604800})

            return {token}

        } else {
            return { erro : "Email ou senha incorretos!" }
        }
    } else{
        return { erro : "Email ou senha incorretos!" }
    }
}
module.exports = {criarLoja, autenticarLoja};