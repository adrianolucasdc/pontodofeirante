import categoria_feminina from "../assets/categoria_feminino_icon.svg"

export default function Categoria() {
    return (
        <div>
            <div className=' flex flex-row gap-4 w-full h-[92px] shadow-xl overflow-auto justify-around'>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_feminina} className=" h-9 "/>
                    <h1>Feminino</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_feminina} className=" h-9 "/>
                    <h1>Masculino</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_feminina} className=" h-9 "/>
                    <h1>Infantil</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_feminina} className=" h-9 "/>
                    <h1>Feminino</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_feminina} className=" h-9 "/>
                    <h1>Feminino</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_feminina} className=" h-9 "/>
                    <h1>Feminino</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_feminina} className=" h-9 "/>
                    <h1>Feminino</h1>
                </div>
                <div className='flex flex-col justify-center items-center min-w-20 '>
                    <img src={categoria_feminina} className=" h-9 "/>
                    <h1>Feminino</h1>
                </div>
                
                
                
                
                
            </div>
        </div>
    )
}