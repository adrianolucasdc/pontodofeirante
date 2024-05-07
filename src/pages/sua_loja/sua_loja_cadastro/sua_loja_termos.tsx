import Menu_principal from "../../../components/menu_principal/menu_principal"


export default function Sua_loja() {
    return (
        <div className=" h-full">
            <div className=" flex  h-full items-center justify-center ">
                <div className=" max-w-[330px] flex flex-col justify-center items-center px-4 py-10 rounded-xl shadow-2xl">
                    <h1 className=" text-3xl font-bold text-primaryColor">Inicie suas vendas conosco</h1>
                    <h1 className=" text-xl text-center text-primaryColor">Com o <b className=" text-secundaryColor font-extrabold">.doFeirante </b> é ainda mais fácil vender online</h1>
                    <div>
                    </div>
                    
                </div>
            </div>
            <Menu_principal />
        </div>
    )
}