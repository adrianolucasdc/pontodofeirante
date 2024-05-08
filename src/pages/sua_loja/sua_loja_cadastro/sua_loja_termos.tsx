import Menu_principal from "../../../components/menu_principal/menu_principal"
import { Link } from "react-router-dom"


export default function Sua_loja() {
    return (
        <div className=" h-full flex flex-col">

            <div className=" ml-6 mt-7">
                <Link to="/sualoja">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className=" flex items-center justify-center ">
                <div className=" max-w-[330px] flex flex-col justify-center mt-5 mb-28 px-4 py-10 rounded-xl shadow-2xl">
                    <h1 className=" text-3xl font-bold text-primaryColor">Termos e condições</h1>
                    <div className=" text-xl text-justify text-primaryColor">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fuga reprehenderit sapiente accusamus explicabo, error commodi odio laudantium aperiam officia voluptatibus nostrum at, qui libero? Quis quibusdam exercitationem sapiente dolorem?
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum non, quam eligendi nostrum quae, velit voluptate officiis incidunt eaque unde aperiam beatae ad voluptatum tempore soluta sed nam dignissimos quo.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non voluptate cupiditate temporibus? Architecto ullam, accusantium adipisci qui soluta, laudantium quod distinctio repudiandae perferendis incidunt, sint earum accusamus est inventore fugit.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum non, quam eligendi nostrum quae, velit voluptate officiis incidunt eaque unde aperiam beatae ad voluptatum tempore soluta sed nam dignissimos quo.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non voluptate cupiditate temporibus? Architecto ullam, accusantium adipisci qui soluta, laudantium quod distinctio repudiandae perferendis incidunt, sint earum accusamus est inventore fugit.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum non, quam eligendi nostrum quae, velit voluptate officiis incidunt eaque unde aperiam beatae ad voluptatum tempore soluta sed nam dignissimos quo.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non voluptate cupiditate temporibus? Architecto ullam, accusantium adipisci qui soluta, laudantium quod distinctio repudiandae perferendis incidunt, sint earum accusamus est inventore fugit.
                        </p>
                    </div>
                    

                </div>
            </div>
            <Menu_principal />
        </div>
    )
}