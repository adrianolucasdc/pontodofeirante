const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cuid = require("cuid");
const bcrypt = require("bcrypt");
const crypto = require('crypto')
const jwt = require("jsonwebtoken");


async function criarUsuario(nome, email, senha, telefone, cpf, cep, dataNasc, sexo, 
    estado, cidade, rua, numero, bairro, termos){
        const salt = await bcrypt.genSalt(12);

        const telefoneSemMascara = String(telefone).replace(/\D/g,"");
        const cpfSemMascara = String(cpf).replace(/\D/g, "");
        const cepSemMascara = String(cep).replace(/\D/g, "");
        const password = senha

        
        const cpfCriptografado = crypto.createHmac('sha256', process.env.SECRET).update(cpfSemMascara).digest('hex');
        const passwordHash = await bcrypt.hash(password, salt);

        const [existEqualEmail, existEqualTelefone, existEqualCpf] = await Promise.all([
            prisma.usuario.findUnique({where:{email : email}}),
            prisma.usuario.findUnique({where:{telefone : telefoneSemMascara}}),
            prisma.usuario.findUnique({where:{cpf : cpfCriptografado}})
        ])

            if (existEqualEmail){
            return {existe: "email",
                    msg: "Esse e-mail já está sendo utilizado!"}
        } else if (existEqualTelefone){
            return {existe: "telefone",
                    msg: "Esse telefone já está sendo utilizado!"}
        } else if (existEqualCpf){
            return {existe: "cpf",
                    msg: "Esse cpf já está sendo utilizado!"}
        } else {
            const create_user = await prisma.usuario.create({
                data:{
                    id : cuid(),
                    nome : nome,
                    email : email,
                    senha : passwordHash,
                    telefone : telefoneSemMascara,
                    cpf : cpfCriptografado,
                    dataNasc : dataNasc+"T12:00:00Z",
                    sexo : sexo,
                    termos: termos,
                    endereco : {
                        create : {
                            cep : cepSemMascara,
                            uf : estado,
                            cidade : cidade, 
                            rua : rua,
                            numero : numero,
                            bairro : bairro,
                        }
                    } 
                }
            }).catch((error) => {
                console.error('Erro ao criar usuário:', error);
                return {msg: "Ocorreu um erro!"}
            });
        }
    }       
        
    

async function autenticarUsuario(email, senha){

    const user = await prisma.usuario.findUnique({
        where: {
            email: String(email),
        }
    });

    if (user) {
        const authHash = await bcrypt.compare(senha, user.senha);

        if (authHash) {
            const secret = process.env.SECRET

            const token = jwt.sign({
                id: user.id,
                name:user.nome,
                email : user.email 
            }, secret, {expiresIn: 604800})

            return {token}

        } else {
            return { erro : "Email ou senha incorretos!" }
        }
    } else{
        return { erro : "Email ou senha incorretos!" }
    }
}

module.exports = {criarUsuario, autenticarUsuario};