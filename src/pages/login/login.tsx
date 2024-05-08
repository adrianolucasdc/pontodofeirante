import { Link } from "react-router-dom"
import * as zod from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import Menu_principal from "../../components/menu_principal/menu_principal"

const loginFormValidationSchame = zod.object({
    email: zod.string().email('Digite um email válido'),
    password: zod.string().nonempty('DIgite a sua senha')
})


type NewLoginFormData = zod.infer<typeof loginFormValidationSchame>

export default function Login() {

    const loginForm = useForm<NewLoginFormData>({
        resolver: zodResolver(loginFormValidationSchame)
    })

    const { register, handleSubmit, formState, reset } = loginForm

    const { errors } = formState

    const handleLoginSubmit = (data: NewLoginFormData ) => {
        console.log(data)
        reset()
    }

    return (
        <div className=" h-screen flex flex-col left ">
            <div className=" ml-6 mt-7">
                <Link to="/perfil">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className=" w-full h-full flex  items-center justify-center">
                <div className=" flex flex-col items-center justify-center w-80 h-96 mx-6 px-5 rounded-xl border-2 border-primaryColor shadow-2xl">
                    <h1 className=" font-extrabold text-4xl text-primaryColor mt-6">Entrar</h1>
                    <div className=" flex flex-col items-center justify-around  h-full w-full mx-3">
                        <form onSubmit={handleSubmit(handleLoginSubmit)} className=" h-52 flex flex-col justify-around">
                            <div className=" flex flex-col items-center w-full">
                                <label>E-mail</label>
                                <input
                                    type="email"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                    placeholder="Digite seu email"
                                    {...register('email')}
                                />
                                
                            </div>

                            <div className=" flex flex-col items-center w-full">
                                <label>Senha</label>
                                <input
                                    type="password"
                                    className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                    placeholder="Digite sua senha"
                                    {...register('password')}
                                />
                            </div>

                            <div>
                                <button
                                    
                                    className=" bg-secundaryColor w-52 h-9 rounded-lg font-extrabold text-primaryColor text-2xl ">Enviar</button>
                            </div>
                        </form>

                        <div>
                            <Link to="/cadastro_user">
                                <div className=" flex flex-col items-center">
                                    <p className=" text-primaryColor">Não possui cadastro?</p>
                                    <p className=" text-primaryColor">Cadastre-já</p>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>

            <Menu_principal />
        </div>
    )
}