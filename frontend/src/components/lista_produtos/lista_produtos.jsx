import ProductImg from "../../assets/product_img.png"

export default function Lista_produtos() {
    return (
        <div>
            <div className=" flex flex-row justify-between">
                <div className=" w-1/3 h-20 flex items-center justify-center">
                    <img className=" pl-1 w-full max-w-8" src={ProductImg} alt="imagem produto" />
                    <h1 className=" pl-1 text-primaryColor">Calça Pantalona</h1>
                </div>
                <div className=" w-1/3 h-20 flex items-center justify-center">
                    <input className=" text-primaryColor text-center w-16" id="referencia_produto" type="number" disabled value="961165" />
                </div>
                <div className=" w-1/3 h-20 flex items-center justify-center">
                    <input className=" text-primaryColor text-center w-16" id="quantidade_produto" type="number" disabled value="122" />
                </div>
                <div className=" flex items-center text-thirdColor pr-1">
                    <span className="material-symbols-outlined">
                        edit_square
                    </span>
                </div>
            </div>
        </div>
    )
}