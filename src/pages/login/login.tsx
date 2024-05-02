import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className=" h-screen flex flex-col left ">
            <div className=" ml-6 mt-7">
                <Link to="/">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className=" w-full h-full flex  items-center justify-center">
                <form action="" className=" flex flex-col items-center justify-center w-80 h-80 mx-6 px-5 rounded-xl border-2 border-primaryColor shadow-2xl">
                    <h1 className=" font-extrabold text-4xl text-primaryColor mt-6">Entrar</h1>
                    <div className=" flex flex-col items-center justify-around mt-6 h-full w-full mx-3">
                        <div className=" flex flex-col items-center w-full">
                            <h1>E-mail</h1>
                            <input type="email" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                        </div>

                        <div className=" flex flex-col items-center w-full">
                            <h1>Senha</h1>
                            <input type="password" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" />
                        </div>

                        <div>
                            <button type="submit" className=" bg-secundaryColor w-52 h-9 rounded-lg font-extrabold text-primaryColor text-2xl ">Enviar</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}