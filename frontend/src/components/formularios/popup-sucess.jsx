import React, { useRef } from 'react'
import Lottie from "react-lottie"
import svgSucess from "../../assets/Animation - 1716001365990.json"

export default function CadastroSucesso(){
   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: svgSucess,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
    

    return(
    <div>
        <div className='fixed bg-gray-500 w-[100%] h-[100%] top-0 left-0 opacity-40 flex justify-center items-center'></div>
        <div className='fixed left-[15%] top-[30%] w-[70%] h-[37%] bg-backgroundColor rounded-xl
        flex justify-center flex-col'>
            <div>
                <Lottie options={defaultOptions} height={200} width={200} />
            </div>
            <div className='text-center mb-7'>
                <h1 className='font-bold mb-2'>Cadastro Realizado <br/> Com Sucesso!</h1>
                <h1 className='text-sm'>Redirecionando...</h1>
            </div>
        </div>
    </div>
    )
}