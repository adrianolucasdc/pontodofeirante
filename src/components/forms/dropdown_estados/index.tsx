import { useEffect, useState } from "react";

import { fetchEstados } from "@/helpers/ibge";

const Dropdown_estados = ({onChange = () => {} }) => {

    const [states, setStates] = useState([]);

    useEffect(() => {
        fetchEstados().then((states) => {
            setStates(states)
        });
    }, []);

    return (
        <div className=" flex flex-col w-24 ">
            <label htmlFor="estado" className="  text-primaryColor">Estado:</label>
            <select id="state" name="state" onChange={onChange} className=" border-2 border-primaryColor rounded-lg h-9">
                <option value="">Selecione um estado...</option>
                {states.map((state) => {
                    const {sigla, nome} = state;
                    return (<option key={sigla} value={sigla}>{nome}</option>)
                })}
            </select>
        </div>
    )
}
export default Dropdown_estados;