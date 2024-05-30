const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cuid = require("cuid");

async function createProduct(dados){
    
    const create_product = prisma.produto.create({
        data: {
                id: cuid(),
                nomeCategoria:dados.nomeCategoria,
                lojaId: dados.lojaId,
                produtos:{

                }
            }
        }
    )
}
