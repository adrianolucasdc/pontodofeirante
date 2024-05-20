
export default function Edit_produto({ closeEdit }) {
    return (
        <div
            className=" h-full w-full flex flex-col items-center justify-center z-40 fixed px-6 bg-opacity-80 bg-black"
        >
            <div className=" w-full flex flex-col bg-white rounded-md ">
                <div className=" ml-2 w-full mt-5">
                    <button onClick={closeEdit}>
                        <span className="material-symbols-outlined w-5 h-5 text-primaryColor">
                            close
                        </span>
                    </button>
                </div>
                <div className="  mt-7 flex flex-col mx-2 bg-red-800">
                    componente editar produto
                </div>
            </div>
        </div>
    )
};