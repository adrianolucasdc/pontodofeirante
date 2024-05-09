import { Link } from "react-router-dom"
import { useState } from "react";
import { IMaskInput } from "react-imask";

import Menu_principal from "../../../components/menu_principal/menu_principal"

export default function Sua_loja_cadastro() {

    const [nome_empresa, setNome_empresa] = useState('')
    const [razao_social, setRazao_social] = useState('')
    const [email, setEmail] = useState('')
    const [numPhone, setNumPhone] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    

    function handleSubmit(e) {
        e.preventDefault();
        if (nome_empresa !== '' && razao_social !== '' && email !== '' && numPhone !== '' && cnpj !== '' && password !== '' && confirmPassword !== '') {
            alert("cadastro realizado")
        }

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
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1>Informações de contato</h1>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Nome da empresa</h1>
                                <input
                                    id="nome_empresa"
                                    value={nome_empresa}
                                    onChange={(e) => setNome_empresa(e.target.value)}
                                    type="text"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Razão social</h1>
                                <input
                                    id="razao_social"
                                    value={razao_social}
                                    onChange={(e) => setRazao_social(e.target.value)}
                                    type="text"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Email da loja</h1>
                                <input
                                    id="email_loja"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Número de telefone </h1>
                                <IMaskInput
                                    className="border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                    value={numPhone}
                                    onChange={(e) => setNumPhone(e.target.value)}
                                    mask="(00) 00000-0000">
                                </IMaskInput>
                            </div>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">CNPJ da loja</h1>
                                <IMaskInput
                                    className="border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                    value={cnpj}
                                    onChange={(e) => setCnpj(e.target.value)}
                                    mask="00.000.000/0000-00"
                                    id="cnpj_loja"
                                    type="text">

                                </IMaskInput>
                                
                            </div>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Senha</h1>
                                <input
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Confirme a senha</h1>
                                <input
                                    id="confirm_password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>
                            <div className=" mb-3">
                                <input
                                    id="check_termos_e_condicoes"
                                    name="checkBoxValue"
                                    type="checkbox"
                                    className=" border-primaryColor border-2 rounded-md " 
                                />
                                <label className=" pl-2">Eu aceito os <Link className=" text-secundaryColor underline font-bold" to="/termosecondicoes">Termos e condições</Link></label>

                            </div>
                        </div>



                        <div className=" w-full flex justify-center">
                            <button type="submit" className=" bg-secundaryColor w-52 h-9 rounded-lg font-extrabold text-primaryColor text-2xl ">Cadastrar</button>
                        </div>

                    </form>

                </div>
            </div>
            <Menu_principal />
        </div>
    )
}