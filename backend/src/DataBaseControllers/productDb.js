const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cuid = require("cuid");

async function createProduct(dados){
    
    const create_product = prisma.produto.create({
        data: {
                id:cuid(),
                nomeProduto: dados.nome,
                categoria:dados.categoria,
                imagem: dados.imagem,
                descricao: dados.descricao,   
                cores: {
                    nomeCor: dados.nomeCor,
                    tamanhos: {
                        nomeTamanho : dados.nomeTamanho,
                        detalhesProduto: {
                            preco: dados.preco,
                            qtd : dados.qtd 
                        }
                    }
                }
            }
        }
    )
}
