import Categoria from "../../components/categoria/categoria";
import Publicidade from "../../components/publicidade/publicidade";
import Carrosel_Produtos from "../../components/carrosel_produtos/carrosel_produtos";
import Menu_principal from "../../components/menu_principal/menu_principal";

import '../../index.css'

import { IoMdSearch } from "react-icons/io";
import { IoFilterCircleOutline } from "react-icons/io5";



export default function App() {
  return (
    <div >
      <header className="sticky">
        <div className=' flex flex-row mt-3 w-full justify-around'>
          <div className=" flex flex-row items-center bg-lightColor w-[302px] h-11 rounded-2xl ">
            <IoMdSearch color='#2C4059' size={30} className=' pl-2' />
            <input placeholder='Vestidos, blusas, calças' className=' pl-2 text-sm text-primaryColor placeholder-primaryColor w-full h-full rounded-2xl' />
          </div>
          <button className=''>
            <IoFilterCircleOutline color='#2C4059' size={44} />
          </button>
        </div>
      </header>
      <div className="mt-2">
        <Categoria />
      </div>
      <div className=" flex items-center justify-center mt-7">
        <Publicidade />
      </div>

      <Carrosel_Produtos titulo={"Promoções"}/>
      <Carrosel_Produtos titulo={"Recomendados"}/>
      <Carrosel_Produtos titulo={"Novos"}/>

      <Menu_principal/> 
    </div>
  )
}