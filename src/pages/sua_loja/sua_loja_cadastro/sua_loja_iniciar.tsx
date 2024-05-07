import { Link } from "react-router-dom"


import Menu_principal from "../../../components/menu_principal/menu_principal";
import Draw_feira from "../../../assets/desenho_feira.png"


export default function Sua_loja() {
    return (
        <div className=" h-full">
            <div className=" flex  h-full items-center justify-center ">
                <div className=" max-w-[330px] h-[450px] flex flex-col justify-around items-center px-4 py-10 rounded-xl shadow-2xl">
                    <h1 className=" text-3xl font-bold text-primaryColor">Inicie suas vendas conosco</h1>
                    <h1 className=" text-xl text-center text-primaryColor">Com o <b className=" text-secundaryColor font-extrabold">.doFeirante </b> é ainda mais fácil vender online</h1>
                    <div>
                        <img src={Draw_feira} alt="" />
                    </div>

                    <Link to='/termosecondicoes' className=" bg-secundaryColor w-52 h-9 rounded-lg font-extrabold text-primaryColor text-2xl flex items-center justify-center shadow-xl">
                        Aceitar
                    </Link>
                    
                </div>
            </div>
            <Menu_principal />
        </div>
    )
}