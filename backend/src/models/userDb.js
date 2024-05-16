const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cuid = require("cuid");


async function criarUsuario(nome, email, senha, telefone, cpf, cep, dataNasc, sexo, 
    estado, cidade, rua, numero, bairro){
        const telefoneSemMascara = String(telefone).replace(/\D/g,"");
        const cpfSemMascara = String(cpf).replace(/\D/g, "");
        const cepSemMascara = String(cep).replace(/\D/g, "");

        const numeroTelefone = parseInt(telefoneSemMascara);
        const numeroCpf = parseInt(cpfSemMascara, 10);
        const numeroCep = parseInt(cepSemMascara, 10);

        const create_user = await prisma.usuario.create({
            data:{
                id : cuid(),
                nome : nome,
                email : email,
                senha : senha,
                telefone : numeroTelefone,
                cpf : numeroCpf,
                dataNasc : dataNasc+"T12:00:00Z",
                sexo : sexo,
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

module.exports = {criarUsuario};