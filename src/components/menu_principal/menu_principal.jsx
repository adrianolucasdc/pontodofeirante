import { Link } from "react-router-dom"

export default function Menu_principal() {
    return (
        <div>
            <div className=" h-20 w-full border-t-2 fixed bottom-0 bg-lightColor">
                <div className=" h-full flex flex-row justify-around items-center">
                    <Link to="/">
                        <div className=" w-14 h-full flex flex-col justify-center items-center">
                        <svg className=" h-10" xmlns="http://www.w3.org/2000/svg" height="37" viewBox="0 -960 960 960" width="35" fill="#EA5454"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                            <h1 className=" font-extrabold text-thirdColor">Home</h1>
                        </div>
                    </Link>

                    <Link to="/favoritos">
                        <div className=" w-14 h-full flex flex-col justify-center items-center">
                            <svg className=" fill-thirdColor h-10" xmlns="http://www.w3.org/2000/svg" height="37" viewBox="0 -960 960 960" width="35"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                            <h1 className=" font-extrabold text-thirdColor">Favoritos</h1>
                        </div>
                    </Link>

                    <Link to="/sacola">
                        <div className=" w-14 h-full flex flex-col justify-center items-center">
                            <svg className=" fill-thirdColor h-10" xmlns="http://www.w3.org/2000/svg" height="37" viewBox="0 -960 960 960" width="35"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" /></svg>
                            <h1 className=" font-extrabold text-thirdColor">Sacola</h1>
                        </div>
                    </Link>

                    <Link to="/sualoja">
                        <div className=" w-15 h-full flex flex-col justify-center items-center">
                            <svg className=" fill-thirdColor h-10" xmlns="http://www.w3.org/2000/svg" height="37" viewBox="0 -960 960 960" width="35"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z" /></svg>
                            <h1 className=" font-extrabold text-thirdColor">Sua Loja</h1>
                        </div>
                    </Link>

                    <Link to='/perfil'>
                        <div className=" w-14 h-full flex flex-col justify-center items-center">
                            <svg className=" fill-thirdColor h-10" xmlns="http://www.w3.org/2000/svg" height="37" viewBox="0 -960 960 960" width="35"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
                            <h1 className=" font-extrabold text-thirdColor">Perfil</h1>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}