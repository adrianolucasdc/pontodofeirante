import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className=" h-screen flex flex-col left ">
            <div className=" ml-6 mt-7">
                <Link to="/">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className=" w-full h-full flex  items-center justify-center ">
                <form action=""  className=" flex flex-col items-center justify-center w-60 h-80 mx-6 px-5 rounded-xl border-2 border-primaryColor">
                    <h1 className=" font-extrabold text-4xl text-primaryColor">Login</h1>
                    <div className=" mt-14">
                        <div className=" mb-3 flex flex-col items-center">
                            <h1>E-mail</h1>
                            <input type="email" className=" border-primaryColor border-2 rounded-md" />
                        </div>

                        <div className=" mb-3 flex flex-col items-center">
                            <h1>Senha</h1>
                            <input type="pa" className=" border-primaryColor border-2 rounded-md" />
                        </div>

                        <button type="submit" className=" bg-secundaryColor w-full rounded-lg">Enviar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}