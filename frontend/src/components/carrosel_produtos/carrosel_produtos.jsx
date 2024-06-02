import React, { useState } from 'react'
import Produtos from "../../components/produtos/produtos";


export default function Carrosel_Produtos({titulo, props}) {
    const [produtos, setProdutos] = useState([]);
    const [load, setLoad] = useState(true)
    
    function update(){
        setTimeout(() => {
            setProdutos(props.produtos);
            setLoad(false)
        }, 300);
        
    }
    update();

    return(
        <div className='mt-8 h-[290px]'>
            <div className='flex justify-between mx-5 items-center'>
                <h1 className='text-xl font-extrabold text-primaryColor'>{titulo}</h1>
                <div className='flex justify-center items-center '>
                    <h1 className='text-thirdColor active:text-black text-[14px]'>ver mais</h1>
                    <svg fill="rgb(234, 84, 84)"version="1.1" xmlns="http://www.w3.org/2000/svg" height="8px" width="12px"viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 129 129"><g><path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/></g></svg>
                </div>
                
            </div>
            <div className=" flex items-start justify-around overflow-scroll gap-5 no-scrollbar px-5">
                {
                    load && 
                    <div>
                        <h1>Carregando...</h1> 
                    </div>
                }
                {
                    produtos.map(prop => <Produtos key={prop.id} props={prop}/>)
                }
            </div>
        </div>
    )
}