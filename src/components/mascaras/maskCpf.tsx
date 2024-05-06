import React from "react";
import InputMask from "react-input-mask";

const MaskCpf = () => {
    return(
        <InputMask className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2" mask="999.999.999-99"/>
    )
}

export default MaskCpf;