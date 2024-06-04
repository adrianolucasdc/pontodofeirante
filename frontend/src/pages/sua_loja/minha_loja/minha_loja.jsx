import React, { useState } from 'react'
import Menu_principal from '../../../components/menu_principal/menu_principal'
import Menu_sua_loja from '../../../components/menu_sua_loja/sua_loja'
import BtnMenuIcon from '../../../assets/btnMenu_sua_loja_icon.svg'


export default function Minha_loja() {
    const [showMenuLoja, setShowMenuLoja] = useState(false)

    function toggleMenu(){
        setShowMenuLoja(!showMenuLoja)
    }

    return(
        <div>
            <div className='flex flex-col'>
                {showMenuLoja && <Menu_sua_loja close={() => toggleMenu()} />}
                <div className='ml-5 mt-5 '>
                    <button onClick={() => toggleMenu()}>
                            <img src={BtnMenuIcon} alt="menu da loja" />
                    </button>
                </div>
                
                <h1 className='text-5xl font-bold text-center'>Minha loja</h1>

                <div className='flex text-start mx-4 mt-10 flex-col'>
                    <h1 className='text-primaryColor ml-3 text-lg font-bold'>Estoque</h1>
                    <div className='flex justify-center w-full mt-3 '>
                        <div className='w-[90%] min-h-20 bg-white rounded-lg border-2'>

                        </div>
                    </div>
                    
                </div>
            </div>
            <Menu_principal />
        </div>
    )
};