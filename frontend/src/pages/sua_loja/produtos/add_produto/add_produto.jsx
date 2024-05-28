import { React, useState } from 'react'
import { Link } from "react-router-dom"

import { MdKeyboardArrowLeft } from "react-icons/md";
import { Form, Field, Formik } from "formik";
import * as Yup from 'yup'
import { ErrorMessage } from "formik";
import { FaUpload } from "react-icons/fa";

import Btn_cad_produtos_info from '../../../../components/btn_cad_produtos_info/btn_cad_produtos_info'
import campoPreencher from '../../../../components/formularios/input';

const validationSchema = Yup.object().shape({ // criando esquema de validação
    nomeProduto: Yup.string().required('Campo obrigatório!'),
    preco: Yup.number().required('Campo obrigatório!'),
    qtdProduto: Yup.number().required('Campo obrigatório!'),
    categoria: Yup.string().required('Campo obrigatório!'),
    cores: Yup.string().required('Campo obrigatório!'),
    tamanho: Yup.string().required('Campo obrigatório!'),
    desconto: Yup.number(),
})


export default function Add_produto() {

    let nomePrd = '';

    return (
        <div className=" h-full flex flex-col">
            <div className=" mx-6 mt-7">
                <div>
                    <Link to="/produtos">
                        <MdKeyboardArrowLeft size={30} className=" text-primaryColor" />
                    </Link>
                </div>
                <div className=" mt-5">
                    <h1 className=" text-primaryColor text-xl font-bold">Adicione um produto a sua loja</h1>
                </div>
                <Formik
                    initialValues={{ nomeProduto: '', preco: '', qtdProduto: '', categoria: '', cores: '', tamanho: '', imgproduto: '' }}
                    onSubmit={values => {
                        nomePrd = values.nomeProduto;
                        console.log(values)
                    }}
                    validationSchema={validationSchema} // esquema de validação yup
                >
                    {({ handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                            {campoPreencher("Nome do Produto", "Insira o nome do produto...", "nomeProduto", "text")}
                            <div className=' flex flex-row justify-between'>
                                {campoPreencher("Preço", "Insira o preço...", "preco", "number", " border-primaryColor border-2 rounded-md w-40 h-[42px] pl-2")}

                                {campoPreencher("Qtd.  produtos", "Insira a quantidade...", "qtdProduto", "number", " border-primaryColor border-2 rounded-md w-40 h-[42px] pl-2")}
                            </div>
                            <div className=' flex flex-row justify-between'>
                                <div className=' max-w-24'>
                                    <h1 className='font-bold text-primaryColor'>Categoria: </h1>
                                    <Field as="select" name="categoria" className=" h-9 border-primaryColor border-2 rounded-md">
                                        <option value="">Selecione</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Moda_praia">Moda praia</option>
                                        <option value="Descontos">Descontos</option>
                                    </Field>
                                    <ErrorMessage name="categoria" component="div" className='error text-red-600 text-sm ' />
                                </div>
                                <div className=' max-w-24'>
                                    <h1 className='font-bold text-primaryColor'>Cores: </h1>
                                    <Field as="select" name="cores" className=" h-9 border-primaryColor border-2 rounded-md">
                                        <option value="">Selecione</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Preto">Preto</option>
                                        <option value="Branco">Branco</option>
                                        <option value="Verde">Verde</option>
                                    </Field>
                                    <ErrorMessage name="cores" component="div" className='error text-red-600 text-sm' />
                                </div>
                                <div className=' max-w-24'>
                                    <h1 className='font-bold text-primaryColor'>Tamanhos: </h1>
                                    <Field as="select" name="tamanho" className=" h-9 border-primaryColor border-2 rounded-md">
                                        <option value="">Selecione</option>
                                        <option value="pp">pp</option>
                                        <option value="p">p</option>
                                        <option value="m">m</option>
                                        <option value="g">g</option>
                                        <option value="gg">gg</option>
                                        <option value="l">l</option>
                                        <option value="xl">xl</option>
                                    </Field>
                                    <ErrorMessage name="tamanho" component="div" className='error text-red-600 text-sm' />
                                </div>
                            </div>


                            <div className=''>
                                <h1 className='font-bold text-primaryColor'>Foto Produto: </h1>

                                <label htmlFor="imgproduto" className=' mb-3 border-2 border-primaryColor rounded-md flex flex-row items-center pl-5 h-[42px]'>
                                    <FaUpload color="#11111" className=' mr-5' />
                                    Escolha a foto do seu produto
                                </label>
                                <input
                                    type="file"
                                    className=' hidden'
                                    name='imgproduto'
                                    id='imgproduto'
                                    accept='/image/*'
                                    onChange={(event) => {
                                        setFieldValue("file", event.target.files[0]);
                                    }}
                                />
                                <ErrorMessage name="imgproduto" component="div" className='error text-red-600 text-sm' />
                            </div>

                            <button
                                className=" h-9 px-4 bg-secundaryColor rounded-full active:bg-primaryColor active:text-secundaryColor"
                                type="submit"
                                id='submit'
                            >
                                Cadastrar Produto
                            </button>

                            
                            <h1>{nomePrd}</h1>
                            
                            <button
                                className=" h-9 px-4 flex items-center justify-center rounded-full bg-thirdColor xl active:bg-primaryColor active:text-secundaryColor"
                                type="button"
                            >
                                <h1>Adicionar</h1>
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                            </button>


                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    )
};
