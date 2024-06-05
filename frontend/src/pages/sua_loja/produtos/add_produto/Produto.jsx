import React, {useState} from 'react'


const Produto = ({prod, handleTaskDeletion}) => {
    const reader = new FileReader();
    const [src, setSrc] = useState("");

    reader.onload = function(){
        setSrc(reader.result);
    }

    reader.readAsDataURL(prod.imgproduto);

    return ( 
        <div className='w-full h-full flex justify-center'>
            <div className='border-2 border-gray w-[90%] gap-3 mb-2'>
                <img src={src} alt="" />
                <span>
                    {prod.nomePrd}
                </span>
                <span>
                    {prod.precoPrd}
                </span>
                <span>
                    {prod.qtdPrd}
                </span>
                <span>
                    {prod.categoriaPrd}
                </span>
                <span>
                    {prod.corPrd}
                </span>
                <span>
                    {prod.tamanhosPrd}
                </span>

                <div className=''>
                    <button className='text-red-500' type="button" onClick={()=>handleTaskDeletion(prod.id)}>X</button>
                </div>
            </div>
        </div>
            
    );
}
 

export default Produto;