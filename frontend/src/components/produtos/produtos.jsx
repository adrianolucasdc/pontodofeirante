import React, { useState } from 'react'
import notfound from "../../assets/vecteezy_icon-image-not-found-vector_.jpg"

export default function Produtos({props}) {
    const preco = String(props.cores[0].tamanhos[0].detalhesProduto[0].preco)
    const image = String(import.meta.env.VITE_REACT_APP_LOGIN_API + "/uploads/"+ props.imagem)



    return (
        <div className=" mt-5 mb-5">
            <div className="w-[150px] overflow-hidden">
                <div className=" w-[150px] h-[150px] rounded-lg border border-black relative overflow-hidden">
                    <img src={image} alt="" />
                    <img src={notfound} alt="" />
                    <div className="absolute bottom-0 right-1">
                        {/* <div className=" flex flex-row">
                            <svg className=" w-4 fill-primaryColor" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                <path d="m94.82 42.52-21.449 19.371 6 28.289c0.23438 1.1172-0.21094 2.2695-1.1367 2.9414-0.92188 0.66797-2.1523 0.73828-3.1445 0.16797l-25.09-14.41-25.059 14.41c-0.99219 0.57031-2.2227 0.5-3.1484-0.16797-0.92188-0.67188-1.3672-1.8242-1.1328-2.9414l6-28.289-21.48-19.371c-0.82422-0.76953-1.1289-1.9453-0.77734-3.0195 0.34766-1.0742 1.2891-1.8438 2.4062-1.9805l28.75-3.0586 11.793-26.461c0.46484-1.0469 1.5039-1.7227 2.6484-1.7227s2.1836 0.67578 2.6484 1.7227l11.793 26.422 28.75 3.0586c1.1172 0.13672 2.0586 0.90625 2.4062 1.9805 0.35156 1.0703 0.046875 2.25-0.77734 3.0195z" fillRule="evenodd" />
                            </svg>
                            <h1 className=" ml-1">5,00</h1>
                        </div> */}
                    </div>
                </div>
                <div className=" flex flex-col justify-between text-nowrap">
                    <div className=" overflow-scroll no-scrollbar">
                        <h1 className=" font-bold">{props.nomeProduto}</h1>
                    </div>
                    {/* <h1 className=" font-extralight text-lightColorGray overflow-hidden text-nowrap">Nome da Loja, Cidade - UF</h1> */}
                    <div>
                        <h1 className=" ">R$ {preco.replace(".", ",")}</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
} 