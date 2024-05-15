import { useEffect, useState } from "react";
import { fetchCidades } from "../../../helpers/ibge";


const Dropdown_cidades = ({state, onChange = () => {} }) => {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchCidades(state).then((cities)=> {
            setCities(cities);
        })
    }, [state]);


    return (

        <div className=" flex flex-col w-24">
            <label htmlFor="city" className=" text-primaryColor">Cidade:</label>
            <select id="city" name="city" onChange={onChange} className=" border-2 border-primaryColor rounded-lg h-9">
                <option value="">Selecione uma cidade</option>
                {cities.map((city)=> {
                    const {id, nome} = city;
                    return(<option value={id} key={id}>{nome}</option>)
                })}
            </select>
        </div>
    )
}
export default Dropdown_cidades;