
import BtnMenuIcon from '../../../assets/btnMenu_sua_loja_icon.svg'

import Lista_produtos from '../../../components/lista_produtos/lista_produtos'
import Menu_principal from "../../../components/menu_principal/menu_principal"
import Menu_sua_loja from '../../../components/menu_sua_loja/sua_loja';

import { IoMdSearch } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Produtos() {

    function toggleModal() {
        setShowMenuLoja(!showMenuLoja)
    }

    const [showMenuLoja, setShowMenuLoja] = useState(false);


    return (
        <div className="   flex flex-col">
            <div className=' mt-7 flex flex-col mx-6'>
                <button onClick={() => toggleModal()}>
                    <img src={BtnMenuIcon} alt="" />
                </button>
                <div className=' mt-5'>
                    <div className='w-full flex flex-row justify-between'>
                        <h1 className=' font-extrabold text-primaryColor'>
                            Produtos <input disabled type="number" className=' bg-transparent max-w-14' />
                        </h1>
                        <Link to='/addproduto'
                            className=' bg-primaryColor text-backgroundColor text-md rounded-xl w-32 h-8 flex items-center justify-center'
                        >
                            <span className="material-symbols-outlined ">
                                add
                            </span>
                            <h1 className=' font-bold'>
                                PRODUTOS
                            </h1>
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-row items-center bg-lightColor shadow-xl w-full h-11 rounded-2xl mt-5">
                    <IoMdSearch color='#2C4059' size={30} className=' pl-2' />
                    <input placeholder='Pesquisar' className=' pl-2 text-sm text-primaryColor placeholder-primaryColor w-full h-full rounded-2xl' />
                </div>

                <div className=' mt-5 w-full h-8 flex flex-row shadow-xl rounded-xl'>
                    <button className=' bg-white font-extrabold text-primaryColor border-2 border-lineColor w-1/3 h-full rounded-l-xl'>Todos</button>
                    <button className=' bg-white font-extrabold text-primaryColor border-2 border-lineColor w-1/3 h-full'>Ativos</button>
                    <button className=' bg-white font-extrabold text-primaryColor border-2 border-lineColor w-1/3 h-full  rounded-r-xl'>Inativos</button>
                </div>

                <div className=' mt-5 shadow-2xl rounded-xl'>
                    <div className=' h-9 flex flex-row items-center justify-center rounded-t-xl border-b-2 border-lineColor'>
                        <h1 className=' flex items-center justify-center bg-white w-1/3 h-full font-extrabold text-primaryColor rounded-tl-xl'>Nome</h1>
                        <h1 className=' flex items-center justify-center bg-white w-1/3 h-full font-extrabold text-primaryColor'>Referência</h1>
                        <h1 className=' flex items-center justify-center bg-white w-1/3 h-full font-extrabold text-primaryColor rounded-tr-xl'>Qtd.</h1>
                    </div>
                    <Lista_produtos />
                </div>
            </div>
            <Menu_principal />

            {showMenuLoja && (
                <Menu_sua_loja 
                    close={ () => setShowMenuLoja(!showMenuLoja)}
                />
            )}
        </div>
    )
}