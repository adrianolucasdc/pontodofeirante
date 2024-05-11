import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export default async function criarUsuario(nome, email, senha, telefone, cpf, cep, dataNasc, sexo, 
    estado, cidade, rua, numero, bairro){
        const create_user = await prisma.usuario.create({
            data:{
                nome : nome,
                email : email,
                senha : senha,
                telefone : telefone,
                cpf : cpf,
                dataNasc : dataNasc+"T12:00:00Z",
                sexo : sexo,
                endereco : {
                    create : {
                        cep : cep,
                        uf : estado,
                        cidade : cidade, 
                        rua : rua,
                        numero : numero,
                        bairro : bairro,
                    }
                } 

            }
        })
    }

