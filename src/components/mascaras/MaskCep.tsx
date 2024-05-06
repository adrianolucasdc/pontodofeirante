import React from 'react';
import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '')

const mask_cep = ({ value, onChange }) => {

    function handleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                value: onlyNumbers(event.target.value),
            }
        });
    }

    return(
        <InputMask value={value} 
        onChange={handleChange} 
        className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" 
        mask="99999-999"/>
    )
}

export default mask_cep;