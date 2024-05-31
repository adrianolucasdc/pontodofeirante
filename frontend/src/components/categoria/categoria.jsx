import categoria_feminina from "../../assets/categoria_feminino_icon.svg"
import categoria_masculino from "../../assets/categoria_masculino_icon.svg"
import categoria_infantil from "../../assets/categoria_infantil_icon.svg"
import categoria_big_size from "../../assets/categoria_big_size_icon.svg"
import categoria_promocoes from "../../assets/categoria_promocoes_icon.svg"

export default function Categoria() {
    return (
        <div>
            <div className=' flex flex-row gap-4 w-full h-[92px] shadow-xl overflow-auto justify-around no-scrollbar px-2'>
                <div className=' flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_feminina} className=" h-9 "/>
                    <h1>Feminino</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_masculino} className=" h-9 "/>
                    <h1>Masculino</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_infantil} className=" h-9 "/>
                    <h1>Infantil</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_promocoes} className=" h-9 "/>
                    <h1>Promoções</h1>
                </div>
            </div>
        </div>
    )
}