const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cuid = require("cuid");
const bcrypt = require("bcrypt");
const crypto = require('crypto');


async function criarUsuario(nome, email, senha, telefone, cpf, cep, dataNasc, sexo, 
    estado, cidade, rua, numero, bairro, termos){
        const salt = await bcrypt.genSalt(12);

        const telefoneSemMascara = String(telefone).replace(/\D/g,"");
        const cpfSemMascara = String(cpf).replace(/\D/g, "");
        const cepSemMascara = String(cep).replace(/\D/g, "");
        const password = senha

        
        const cpfCriptografado = crypto.createHmac('sha256', 'chave-secreta').update(cpfSemMascara).digest('hex');
        const passwordHash = await bcrypt.hash(password, salt);

        const [existEqualEmail, existEqualTelefone, existEqualCpf] = await Promise.all([
            prisma.usuario.findUnique({where:{email : email}}),
            prisma.usuario.findUnique({where:{telefone : telefoneSemMascara}}),
            prisma.usuario.findUnique({where:{cpf : cpfCriptografado}})
        ])

            if (existEqualEmail){
            return {existe: "email"}
        } else if (existEqualTelefone){
            return {existe: "telefone"}
        } else if (existEqualCpf){
            return {existe: "cpf"}
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
            });
        }
    }       
        
    

async function autenticarUsuario(email, senha){

}

module.exports = {criarUsuario};