import React from 'react'
import imageCalca from "../../assets/7fbd94beb1c7b0135a674f2508896cde.jpg"


export default function Produtos_Sacola() {
    return(
        <div>
            <div className='px-3 mt-3 border-b-2'>
                <div className='flex items-center'>
                    <input type='checkbox' id='nameLoja'></input>
                    <label htmlFor="nameLoja" className='ml-2 font-bold text-primaryColor text-[16px]'>Nome da Loja</label>
                    <svg className="ml-2" width="10" height="10" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 0L9.25 7.5L1.75 15L0 13.25L5.75 7.5L0 1.75L1.75 0Z" fill="#2C4059"/>
                    </svg>
                </div>

                <div className='flex justify-between mt-3 items-center'>
                    <div className='flex items-center'>
                    <img  className="w-[48px] h-[48px]"src={imageCalca} alt="" />
                        <div className='ml-3'>
                            <div className='flex overflow-hidden flex-col'>
                                <h1 className='font-extrabold text-[16px] text-primaryColor'>Calça Pantalona</h1>
                                <div className='flex items-center'>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" fill="#B5D481"/></svg>
                                    <h1 className='ml-2'>Verde limão</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-primaryColor font-extrabold text-[18px]'>R$ 69,90</h1>
                    </div>
                </div>
                <div className='flex justify-between mt-8 mb-3'>
                    <div className='flex ml-2'>
                        <div className='w-[30px] border-[1px] text-[12px] flex justify-center'>
                            <h1>-</h1>
                        </div>
                        <div className='w-[30px] border-[1px] text-[12px] flex justify-center'>
                            <h1>1</h1>
                        </div>
                        <div className='w-[30px] border-[1px] text-[12px] flex justify-center '>
                            <h1>+</h1>
                        </div>
                    </div>
                    <div className=''>
                        <button type='button' className='h-5 text-[12px] bg-primaryColor items-center flex text-white px-2 rounded-lg active:text-primaryColor active:bg-gray-200'>
                            <svg className='mr-1' width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.66667 10C1.36111 10 1.09954 9.8912 0.881944 9.67361C0.664352 9.45602 0.555556 9.19444 0.555556 8.88889V1.66667H0V0.555556H2.77778V0H6.11111V0.555556H8.88889V1.66667H8.33333V8.88889C8.33333 9.19444 8.22454 9.45602 8.00694 9.67361C7.78935 9.8912 7.52778 10 7.22222 10H1.66667ZM7.22222 1.66667H1.66667V8.88889H7.22222V1.66667ZM2.77778 7.77778H3.88889V2.77778H2.77778V7.77778ZM5 7.77778H6.11111V2.77778H5V7.77778Z" fill="white"/>
                            </svg>
                             Excluir Item
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}