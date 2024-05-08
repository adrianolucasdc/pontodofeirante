import { useState } from "react"
import { Link } from "react-router-dom"


import Dropdown_cidades from "@/components/forms/dropdown_cidades"
import Dropdown_estados from "@/components/forms/dropdown_estados"
import MaskCpf from "../../components/mascaras/maskCpf"
import MaskCep from "../../components/mascaras/MaskCep"
import Menu_principal from "@/components/menu_principal/menu_principal"
import MaskPhone from "../../components/mascaras/MaskPhone"



export default function Cadastro_user() {

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [phone, setPhone] = useState('');
    console.log(phone)



    return (
        <div className="">
            <div className=" ml-6 mt-7">
                <Link to="/login">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className="  flex justify-center items-center mt-5">
                <div className=" flex flex-col items-center justify-center w-80 mb-32 px-5 rounded-xl border-2 border-primaryColor shadow-2xl">
                    <h1 className=" font-extrabold text-4xl text-primaryColor mt-6">Cadastre seu usuário</h1>

                    <div className=" flex flex-col  mt-6 h-full w-full mx-3">
                        <form action="">
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Nome completo</h1>
                                <input id="nome" type="text" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor" >E-mail</h1>
                                <input id="email" type="email" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Senha</h1>
                                <input id="senha" type="password" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Confirme sua senha</h1>
                                <input id="conf_senha" type="password" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Número de telefone</h1>
                                <MaskPhone
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">CPF</h1>
                                <MaskCpf
                                    value={cpf}
                                    onChange={(event) => setCpf(event.target.value)}
                                />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">CEP</h1>
                                <MaskCep
                                    value={cep}
                                    onChange={(event) => setCep(event.target.value)}
                                />
                            </div>

                            <div className=" mb-3 flex flex-row justify-between">
                                <div>
                                    <h1 className=" text-primaryColor">Data de nascimento</h1>
                                    <input id="dt_nascimento" type="date" className=" border-primaryColor border-2 rounded-md w-32 h-9 pl-2">
                                    </input>
                                </div>

                                <div>
                                    <h1 className=" text-primaryColor">Sexo</h1>
                                    <select className=" h-9 border-primaryColor border-2 rounded-md" name="sexo" id="sexo">
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                    </select>
                                </div>
                            </div>

                            <div className=" mb-3 flex flex-row justify-between">
                                <Dropdown_estados onChange={handleInputChange} />
                                <Dropdown_cidades state={formValues.state} onChange={handleInputChange} />


                            </div>

                            <div className=" flex w-full items-center justify-center my-5">
                                <button className=" h-9 w-36 bg-secundaryColor rounded-xl" type="submit">
                                    Enviar
                                </button>
                            </div>

                        </form>

                    </div>
                </div>



            </div>
            <Menu_principal />
        </div>

    )
}