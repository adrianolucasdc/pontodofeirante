import { Link } from "react-router-dom"

export default function Menu_sua_loja({ close }) {
    return (
        <div className=" h-full w-full bg-secundaryColor fixed z-50">
            <div className=" flex flex-col items-center justify-center h-full">
                <div className=" w-full ml-5 mt-5">
                    <button onClick={ close }>
                        <span className="material-symbols-outlined w-5 h-5 text-primaryColor">
                            close
                        </span>
                    </button>
                </div>
                <div className=" h-full w-full flex  justify-center items-center">
                    <div className=" h-52 flex flex-col items-center justify-between">
                        <Link to='/produtos' className=" text-xl text-primaryColor font-bold">Produtos</Link>
                        <Link to='/dashboard' className=" text-xl text-primaryColor font-bold">Dashboard</Link>
                        <Link to='/historicodepedidos' className=" text-xl text-primaryColor font-bold">Histórico de pedidos</Link>
                        <Link to='/controle' className=" text-xl text-primaryColor font-bold">Controle</Link>
                        <Link to='/minhaloja' className=" text-xl text-primaryColor font-bold">Minha loja</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};