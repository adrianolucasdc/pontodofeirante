import React, { useState } from 'react'


const Produto = ({ prod, handleTaskDeletion }) => {
    const reader = new FileReader();
    const [src, setSrc] = useState("");

    reader.onload = function () {
        setSrc(reader.result);
    }

    reader.readAsDataURL(prod.imgproduto);
  

    return (
        <div className='w-full h-full flex justify-center'>
            <div className='border-2 border-gray w-[90%] gap-3 my-2 flex flex-col'>
                <img src={src} alt="" className=' object-cover w-[300px] h-[300px]'/>
                <div className=' flex flex-row px-4 items-center'>
                    <h1 className=' text-primaryColor text-lg font-bold'>Nome:</h1>
                    <span className=' ml-4'>
                        {prod.nomePrd}
                    </span>
                </div>

                <div className=' flex flex-row px-4 items-center'>
                    <h1 className=' text-primaryColor text-lg font-bold'>Preço:</h1>
                    <span className=' ml-4'>
                        {prod.precoPrd}
                    </span>
                    <span className=' ml-1'>R$</span>
                </div>
                <div className=' flex flex-row px-4 items-center'>
                    <h1 className=' text-primaryColor text-lg font-bold'>Quantidade:</h1>
                    <span className=' ml-4'>
                        {prod.qtdPrd}
                    </span>
                </div>

                <div className=' flex flex-row px-4 items-center'>
                    <h1 className=' text-primaryColor text-lg font-bold'>Categoria:</h1>
                    <span className=' ml-4'>
                        {prod.categoriaPrd}
                    </span>
                </div>

                <div className=' flex flex-row px-4 items-center'>
                    <h1 className=' text-primaryColor text-lg font-bold'>Cor:</h1>
                    <span className=' ml-4'>
                        {prod.corPrd}
                    </span>
                </div>

                <div className=' flex flex-row px-4 items-center'>
                    <h1 className=' text-primaryColor text-lg font-bold'>Tamanho:</h1>
                    <span className=' ml-4'>
                        {prod.tamanhosPrd}
                    </span>
                </div>

                <div className=''>
                    <button className='text-primaryColor w-full h-9 bg-thirdColor flex flex-row items-center justify-center' type="button" onClick={() => handleTaskDeletion(prod.id)}>
                        <h1 className=' text-primaryColor font-bold mr-4'>Excluir peça</h1>
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
}


export default Produto;