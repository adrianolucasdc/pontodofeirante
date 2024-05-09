import { useState } from "react"
import { Link } from "react-router-dom"

import { IMaskInput } from "react-imask";
import Dropdown_cidades from "../../components/forms/dropdown_cidades"
import Dropdown_estados from "../../components/forms/dropdown_estados"
import Menu_principal from "../../components/menu_principal/menu_principal"



export default function Cadastro_user() {

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const [nomeUser, setNomeUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    const [confirmPasswordUser, setConfirmPasswordUser] = useState('');
    const [phoneUser, setPhoneUser] = useState('');
    const [cpfUser, setCpfUser] = useState('');
    const [cepUser, setCepUser] = useState('');
    const [dtNascimentoUser, setDtNascimentoUser] = useState('');
    const [sexoUser, setSexoUser] = useState('');
    const [estadoUser, setEstadoUser] = useState('');
    const [cidadeUser, setCidadeUser] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (nomeUser !== '' && emailUser !== '' && passwordUser !== '' && confirmPasswordUser !== '' && phoneUser !== '' && cpfUser !== '' && cepUser !== '' && dtNascimentoUser !== '' && sexoUser !== '') {
            alert("Enviou os dados")
        }
    }



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
                        <form onSubmit={handleSubmit}>
                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Nome completo</h1>
                                <input
                                    id="nomeUser"
                                    value={nomeUser}
                                    onChange={(e) => setNomeUser(e.target.value)}
                                    type="text"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor" >E-mail</h1>
                                <input
                                    id="emailUser"
                                    value={emailUser}
                                    onChange={(e) => setEmailUser(e.target.value)}
                                    type="email"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Senha</h1>
                                <input
                                    id="passwordUser"
                                    value={passwordUser}
                                    onChange={(e) => setPasswordUser(e.target.value)}
                                    type="password"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Confirme sua senha</h1>
                                <input
                                    id="confirmPasswordUser"
                                    value={confirmPasswordUser}
                                    onChange={(e) => setConfirmPasswordUser(e.target.value)}
                                    type="password"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">Número de telefone</h1>
                                <IMaskInput
                                    id="phoneUser"
                                    value={phoneUser}
                                    onChange={(e) => setPhoneUser(e.target.value)}
                                    mask="(00) 00000-0000"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">CPF</h1>
                                <IMaskInput
                                    id="cpfUser"
                                    value={cpfUser}
                                    onChange={(e) => setCpfUser(e.target.value)}
                                    mask="000.000.000-00"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                />
                            </div>

                            <div className=" mb-3">
                                <h1 className=" text-primaryColor">CEP</h1>
                                <IMaskInput
                                    id="cepUser"
                                    value={cepUser}
                                    onChange={(e) => setCepUser(e.target.value)}
                                    mask="00000-000"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                />
                            </div>

                            <div className=" mb-3 flex flex-row justify-between">
                                <div>
                                    <h1 className=" text-primaryColor">Data de nascimento</h1>
                                    <input
                                        id="dtNascimentoUser"
                                        value={dtNascimentoUser}
                                        onChange={(e) => setDtNascimentoUser(e.target.value)}
                                        type="date"
                                        className=" border-primaryColor border-2 rounded-md w-32 h-9 pl-2">
                                    </input>
                                </div>

                                <div>
                                    <h1 className=" text-primaryColor">Sexo</h1>
                                    <select
                                        className=" h-9 border-primaryColor border-2 rounded-md"
                                        name="sexo"
                                        id="sexo"
                                        value={sexoUser}
                                        onChange={(e) => setSexoUser(e.target.value)}>
                                        
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