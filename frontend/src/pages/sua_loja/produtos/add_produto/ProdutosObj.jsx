import React from 'react'

import Produto from './Produto' 

export default function ProdutosObj({prods, handleTaskDeletion}){
    return (
        <div>
            {prods.map(prod =><Produto prod={prod} key={prod.id} handleTaskDeletion={handleTaskDeletion}/>)}
        </div>
    )
}