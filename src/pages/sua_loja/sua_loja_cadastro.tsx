import { Link } from "react-router-dom"
import { useState } from "react";
import { IMaskInput } from 'react-imask';

import Menu_principal from "@/components/menu_principal/menu_principal"

export default function Sua_loja_cadastro() {

    const [numPhone, setNumPhone] = useState("")
    
    const onlyNumbers = numPhone.replace(/[^0-9]/g, '')
    console.log(onlyNumbers)

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const valuePhone = evento.target.value;
        setNumPhone(valuePhone)
    }

        

    return (
        <div className=" h-full flex flex-col">

            <div className=" ml-6 mt-7">
                <Link to="/sualoja">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className=" flex items-center justify-center ">
                <div className=" w-full max-w-[330px] flex flex-col justify-center mt-5 mb-28 px-4 py-10 rounded-xl shadow-2xl">
                    <h1 className=" text-3xl font-bold text-primaryColor">Cadastre sua loja</h1>
                    <form action="">
                        <div>
                            <h1>Informações de contato</h1>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Nome da empresa</h1>
                                <input id="nome_empresa" type="text" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Razão social</h1>
                                <input id="razao_social" type="text" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Email da loja</h1>
                                <input id="email_loja" type="email" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Número de telefone </h1>
                                <IMaskInput
                                className="border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                value={numPhone}
                                onChange={handleChange}
                                mask="(00) 00000-0000">
                                </IMaskInput>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <Menu_principal />
        </div>
    )
}