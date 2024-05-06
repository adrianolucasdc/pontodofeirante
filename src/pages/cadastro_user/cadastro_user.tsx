import { useState } from "react"

import Dropdown_cidades from "@/components/forms/dropdown_cidades"
import Dropdown_estados from "@/components/forms/dropdown_estados"
import MaskCpf from "@/components/mascaras/maskCpf";



export default function Cadastro_user() {

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        setFormValues({...formValues, [name]:value})
    }

    console.log('formValues', formValues)


    return (
        <div className=" h-screen flex justify-center items-center">
            <div className=" flex flex-col items-center justify-center w-80  mx-6 px-5 rounded-xl border-2 border-primaryColor shadow-2xl">
                <h1 className=" font-extrabold text-4xl text-primaryColor mt-6">Cadastre seu usuário</h1>

                <div className=" flex flex-col  mt-6 h-full w-full mx-3">
                    <form action="">
                        <div className=" mb-3">
                            <h1>Nome</h1>
                            <input id="nome" type="text" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                        </div>

                        <div className=" mb-3">
                            <h1>Sobrenome</h1>
                            <input id="sobrenome" type="text" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                        </div>

                        <div className=" mb-3">
                            <h1>Número de telefone</h1>
                            <input id="num_phone" type="number" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                        </div>

                        <div>
                            <h1>CPF</h1>
                            <MaskCpf/>
                        </div>

                        <div className=" mb-3 flex flex-row justify-between">
                            <div>
                                <h1>Data de nascimento</h1>
                                <input id="dt_nascimento" type="date" className=" border-primaryColor border-2 rounded-md w-32 h-9 pl-2">
                                </input>
                            </div>

                            <div>
                                <h1>Sexo</h1>
                                <select className=" h-9 border-primaryColor border-2 rounded-md" name="sexo" id="sexo">
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                </select>
                            </div>
                        </div>

                        <div className=" mb-3 flex flex-row justify-between">
                            <Dropdown_estados onChange={handleInputChange}/>
                            <Dropdown_cidades state={formValues.state} onChange={handleInputChange}/>

                            
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}