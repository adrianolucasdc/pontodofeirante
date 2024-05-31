import React from 'react'
import imageCalca from "../../assets/7fbd94beb1c7b0135a674f2508896cde.jpg"

export default function Colecoes() {
    return(
        <div className='mt-4'>
            <div className='h-[150px] w-[150px]'>
                <img className="rounded-lg w-full h-full" src={imageCalca} alt="calça" />
            </div>
            <div>
                <h1 className='text-[16px] font-bold'>Conjuntos verão</h1>
                <h1 className='text-[12px] '>3 salvo(s)</h1>
            </div>
        </div>
    )
}  