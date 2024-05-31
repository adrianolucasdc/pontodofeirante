import React from 'react'
import Produtos from "../../components/produtos/produtos";

export default function Carrosel_Produtos({titulo}) {

    return(
        <div className='mt-8 '>
            <h1 className='ml-5 text-2xl font-extrabold text-primaryColor'>{titulo}</h1>
            <div className=" flex items-start justify-around mx-5 overflow-scroll gap-5 no-scrollbar">
            <Produtos/>
            <Produtos/>
            <Produtos/>
            <Produtos/>
            <Produtos/>
            </div>
        </div>
    )
}