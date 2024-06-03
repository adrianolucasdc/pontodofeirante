import React from 'react'
import Menu_principal from "../../components/menu_principal/menu_principal"
import notfound from "../../assets/vecteezy_icon-image-not-found-vector_.jpg"
import Carrosel_Produtos from '../../components/carrosel_produtos/carrosel_produtos'


export default function Comprar_Produto() {
    const prods = []
    return(
        <div>
            <div>
                <div className='relative'>
                    <div className='absolute m-3'>
                        <svg viewBox="-3 0 32 32"  height="40px" width="40px"version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z" fill="#fff"> </path> <path d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z" fill="#fff"> </path> </g></svg>
                    </div>
                    <img src={notfound} alt="" />
                </div>
                <div className='flex flex-col ml-4 mt-4'>
                    <h1 className='font-extrabold text-primaryColor text-2xl'>Nome do Produto</h1>
                    <h1 className='text-primaryColor text-sm'>Nome da Loja</h1>
                </div>
                <div className='ml-4 mt-4 flex justif'>
                    <h1 className='text-primaryColor font-extrabold text-2xl'>R$ 70,00</h1>
                </div>
                <div className='mt-5 w-screen items-center flex flex-col'>
                    <div>
                        <button className='w-[330px] h-[35px] bg-secundaryColor rounded-lg font-bold active:bg-black active:text-secundaryColor'>
                            Adicionar na Sacola
                        </button>
                    </div>
                    <div className='mt-4'>
                        <button className='w-[330px] h-[35px] bg-red-500 rounded-lg font-bold active:bg-black active:text-red-500'>
                            Comprar agora
                        </button>
                    </div>
                </div>

                <div className='flex flex-col ml-4 mt-4'>
                    <span>Calcular Frete:</span>
                    <form action="">
                        <div className='flex justify-start'>
                            <input className="border-2 w-44 h-9 px-2 border-primaryColor rounded-lg" type="text" />
                            <button type="button" className='bg-secundaryColor ml-1  font-bold w-20 h-9 border-2 border-primaryColor rounded-lg'>Buscar</button>
                        </div>
                    </form>
                </div>

                <div className='ml-4 mt-10'>
                    <h1 className='text-lg font-bold text-primaryColor '>Descrição</h1>
                    <h1 className='indent-7 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio fugiat nobis! Quaerat similique culpa voluptas obcaecati distinctio. Magni dolor, et facilis magnam cum fugit mollitia nesciunt numquam labore nihil?</h1>
                </div>

            </div>
            <div className='mt-10 pb-20'>
                <Carrosel_Produtos titulo={"Relacionados"} props={prods}/>
            </div>
            <Menu_principal/>
        </div>
    )
}