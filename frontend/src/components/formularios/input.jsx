import React from 'react'
import {Field, Formik, Form, ErrorMessage} from "formik"
import * as Yup from "yup";


export default function campoPreencher(titulo, subtitulo, value, type) {
    return(
        <div className=" mb-3">
            <span className=' text-primaryColor font-bold'>{titulo}</span>
            <Field type={type} name={value} className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
            placeholder={subtitulo}/>
            <ErrorMessage name={value} component="div" className='error text-red-600 text-sm ml-3'/>
        </div>
    )
}