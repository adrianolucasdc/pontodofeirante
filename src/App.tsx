import Categoria from "./components/categoria";

import './index.css'

import { IoMdSearch } from "react-icons/io";
import { IoFilterCircleOutline } from "react-icons/io5";



export default function App() {
  return (
    <div >
      <header>
        <div className=' flex flex-row mt-3 w-full justify-around'>
          <div className=" flex flex-row items-center bg-lightColor shadow-xl w-[302px] h-11 rounded-2xl ">
            <IoMdSearch color='#2C4059' size={30} className=' pl-2' />
            <input placeholder='Vestidos, blusas, calças' className=' pl-2 text-sm text-primaryColor placeholder-primaryColor w-full h-full rounded-2xl' />
          </div>

          <button className=''>
            <IoFilterCircleOutline color='#2C4059' size={44} />
          </button>

        </div>
      </header>
      <Categoria/>
    </div>
  )
}