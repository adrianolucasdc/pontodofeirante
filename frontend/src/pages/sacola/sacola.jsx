import React from 'react'
import Menu_principal from "../../components/menu_principal/menu_principal";
import Produtos_Sacola from '../../components/produtos_sacola/produtos_sacola';

export default function Sacola() {
    return(
        <div>
            <div className='flex flex-col'>
                <div className='mt-[54px] ml-[32px] text-4xl font-extrabold text-primaryColor'>
                    <h1>Sacola</h1>
                </div>
                <div className='w-[90%] bg-white mt-7 mx-auto rounded-lg shadow-md'>
                    <div className='pl-3 h-12 text-primaryColor border-b-2 border-primaryColor flex items-center'>
                        <h1 className=' '>Produtos </h1>
                    </div>
                    <div className="">
                        <Produtos_Sacola/>
                    </div>
                </div>
                
            </div>
            <div className='w-full h-[220px] bg-white bottom-[80px] shadow-2xl fixed '>
                <div className='flex justify-between flex-col h-full'>
                    <div className='flex flex-col mt-10 mx-[30px] gap-3'>
                        <div className='w-full flex gap-3 items-center px-2'>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4H14C14.55 4 15.0208 4.19583 15.4125 4.5875C15.8042 4.97917 16 5.45 16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM2 18H14V6H12V8C12 8.28333 11.9042 8.52083 11.7125 8.7125C11.5208 8.90417 11.2833 9 11 9C10.7167 9 10.4792 8.90417 10.2875 8.7125C10.0958 8.52083 10 8.28333 10 8V6H6V8C6 8.28333 5.90417 8.52083 5.7125 8.7125C5.52083 8.90417 5.28333 9 5 9C4.71667 9 4.47917 8.90417 4.2875 8.7125C4.09583 8.52083 4 8.28333 4 8V6H2V18ZM6 4H10C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4Z" fill="#2C4059"/>
                            </svg>
                            <div className='flex items-center justify-between w-full'>
                                <h1 className='font-bold'>Produtos</h1>
                                <h1 className='text-[14px]'>R$ 169,00</h1>
                            </div>
                        </div>
                        <div className='w-full flex gap-3 items-center px-2'>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 17.425V10.575L2 7.1V13.95L8 17.425ZM10 17.425L16 13.95V7.1L10 10.575V17.425ZM8 19.725L1 15.7C0.683333 15.5167 0.4375 15.275 0.2625 14.975C0.0875 14.675 0 14.3417 0 13.975V6.025C0 5.65833 0.0875 5.325 0.2625 5.025C0.4375 4.725 0.683333 4.48333 1 4.3L8 0.275C8.31667 0.0916667 8.65 0 9 0C9.35 0 9.68333 0.0916667 10 0.275L17 4.3C17.3167 4.48333 17.5625 4.725 17.7375 5.025C17.9125 5.325 18 5.65833 18 6.025V13.975C18 14.3417 17.9125 14.675 17.7375 14.975C17.5625 15.275 17.3167 15.5167 17 15.7L10 19.725C9.68333 19.9083 9.35 20 9 20C8.65 20 8.31667 19.9083 8 19.725ZM13 6.525L14.925 5.425L9 2L7.05 3.125L13 6.525ZM9 8.85L10.95 7.725L5.025 4.3L3.075 5.425L9 8.85Z" fill="#2C4059"/>
                            </svg>
                            <div className='flex items-center justify-between w-full'>
                                <h1 className='font-bold'>Frete</h1>
                                <h1 className='text-[14px]'>R$ 22,50</h1>
                            </div>
                        </div>
                        <div className='border-t-2 border-t-primaryColor pt-1 flex justify-between px-2'>
                            <h1 className='font-bold'>Total</h1>
                            <h1 className='text-[14px]'>R$ 191,50</h1>
                        </div>
                    </div>
                    <div className='mx-auto relative bottom-4'>
                        <button className='w-[330px] h-[35px] bg-secundaryColor rounded-lg font-bold active:bg-black active:text-secundaryColor'>Continuar a Compra</button>
                    </div>
                </div>
                <Menu_principal />
            </div>
        </div>
    )
}