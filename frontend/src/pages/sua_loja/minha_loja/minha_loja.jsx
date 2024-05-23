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
            </div>
            <Menu_principal />
        </div>
    )
};