import React from 'react';
import Menu_principal from '../../components/menu_principal/menu_principal';
import Colecoes from '../../components/colocoes/colecoes';



export default function Favoritos() {
    return(
        <div>
            <div className='w-full h-[100px]'>
                <div className='pt-[54px] ml-[32px] text-4xl font-extrabold text-primaryColor'>
                    <h1>Favoritos</h1>
                </div>
                <div className='flex w-[90%] flex-wrap mx-auto mt-6 rounded-lg justify-between px-3'>
                    <Colecoes/>
                    <Colecoes/>
                </div>
            </div>
            <Menu_principal />
        </div>
    )
}