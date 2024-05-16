const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cuid = require("cuid");
const bcrypt = require("bcrypt");


async function criarUsuario(nome, email, senha, telefone, cpf, cep, dataNasc, sexo, 
    estado, cidade, rua, numero, bairro, termos){
        const telefoneSemMascara = String(telefone).replace(/\D/g,"");
        const cpfSemMascara = String(cpf).replace(/\D/g, "");
        const cepSemMascara = String(cep).replace(/\D/g, "");
        const password = senha

        const numeroTelefone = parseInt(telefoneSemMascara);
        const numeroCep = parseInt(cepSemMascara, 10);
        const salt = await bcrypt.genSalt(12);
        const cpfHash = await bcrypt.hash(cpfSemMascara, salt);
        const passwordHash = await bcrypt.hash(password, salt);

        const create_user = await prisma.usuario.create({
            data:{
                id : cuid(),
                nome : nome,
                email : email,
                senha : passwordHash,
                telefone : numeroTelefone,
                cpf : cpfHash,
                dataNasc : dataNasc+"T12:00:00Z",
                sexo : sexo,
                termos: termos,
                endereco : {
                    create : {
                        cep : numeroCep,
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

async function autenticarUsuario(email, senha){

}

async function existe(input){
    const exist = await prisma.usuario.findUnique({
        where :{
            email: input,
        } 
    });
}

module.exports = {criarUsuario};