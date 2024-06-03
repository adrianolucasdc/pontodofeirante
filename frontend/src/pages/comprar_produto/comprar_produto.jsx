import React from 'react'
import Menu_principal from "../../components/menu_principal/menu_principal"
import notfound from "../../assets/vecteezy_icon-image-not-found-vector_.jpg"
import Carrosel_Produtos from '../../components/carrosel_produtos/carrosel_produtos'

import campoPreencher from '../../components/formularios/input'


import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({ // criando esquema de validação
    corCompra: Yup.string().required('Campo obrigatório!'),
    tamanhoCompra: Yup.string().required('Campo obrigatório!'),
    quantidadeCompra: Yup.string().required('Campo obrigatório!'),
})


export default function Comprar_Produto() {
    const prods = []
    return (
        <div>
            <div>
                <div className='relative'>
                    <div className='absolute m-3'>
                        <svg viewBox="-3 0 32 32" height="40px" width="40px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z" fill="#fff"> </path> <path d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z" fill="#fff"> </path> </g></svg>
                    </div>
                    <img src={notfound} alt="" />
                </div>
                <div className='flex flex-col mx-4 mt-4'>
                    <h1 className='font-extrabold text-primaryColor text-2xl'>Nome do Produto</h1>
                    <h1 className='text-primaryColor text-sm'>Nome da Loja</h1>
                </div>
                <div className='mx-4 flex justif'>
                    <h1 className='text-primaryColor font-extrabold text-2xl'>R$ 70,00</h1>
                </div>
                <Formik
                    initialValues={{ corCompra: '', tamanhoCompra: '', quantidadeCompra: '' }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                    validationSchema={validationSchema} // esquema de validação yup
                >
                    {({ handleSubmit }) => (
                        <Form className='mx-4' onSubmit={handleSubmit}>

                            <div className='mt-4 h-28 w-full  flex flex-row justify-between'>
                                <div className=' max-w-24'>
                                    <h1 className='font-bold text-primaryColor'>Cor: </h1>
                                    <Field as="select" name="corCompra" className=" h-9 border-primaryColor border-2 rounded-md mb-3">
                                        <option value="">Selecione</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Preto">Preto</option>
                                        <option value="Branco">Branco</option>
                                        <option value="Verde">Verde</option>
                                    </Field>
                                    <ErrorMessage name="corCompra" component="div" className='error text-red-600 text-sm' />
                                </div>
                                <div className=' max-w-24'>
                                    <h1 className='font-bold text-primaryColor'>Tamanho: </h1>
                                    <Field as="select" name="tamanhoCompra" className=" h-9 border-primaryColor border-2 rounded-md mb-3">
                                        <option value="">Selecione</option>
                                        <option value="pp">pp</option>
                                        <option value="p">p</option>
                                        <option value="m">m</option>
                                        <option value="g">g</option>
                                        <option value="gg">gg</option>
                                        <option value="l">l</option>
                                        <option value="xl">xl</option>
                                    </Field>
                                    <ErrorMessage name="tamanhoCompra" component="div" className='error text-red-600 text-sm' />
                                </div>
                                <div className=' w-full max-w-40 flex flex-col mb-0'>
                                    <div className=' flex flex-row'>
                                        <h1 className=' text-primaryColor font-bold'>Em estoque:</h1>
                                        <h1 className=' ml-2 text-primaryColor font-bold'>5</h1>
                                    </div>
                                    {campoPreencher("", "Insira a quantidade...", "quantidadeCompra", "text", " h-9 border-primaryColor border-2 rounded-md pl-1")}
                                </div>
                            </div>

                            <div className='mt-4 w-full items-center flex flex-col'>
                                <div className=' w-full'>
                                    <button type="submit" id='submit' className='w-full h-[35px] bg-red-500 rounded-lg font-bold text-primaryColor active:bg-black active:text-red-500'>
                                        Comprar
                                    </button>
                                </div>
                                <div className=' mt-2 w-full' >
                                    <button type='button' className='w-full h-[35px] bg-secundaryColor rounded-lg font-bold text-primaryColor active:bg-black active:text-secundaryColor'>
                                        Adicionar na Sacola
                                    </button>
                                </div>
                            </div>

                        </Form>
                    )}
                </Formik>



                <div className='flex flex-col ml-4 mt-4'>
                    <span>Calcular Frete:</span>
                    <form action="">
                        <div className='flex justify-start'>
                            <input className="border-2 w-44 h-9 px-2 border-primaryColor rounded-lg" type="text" />
                            <button type="button" className='bg-secundaryColor ml-1  font-bold w-20 h-9 border-2 border-primaryColor rounded-lg'>Buscar</button>
                        </div>
                    </form>
                </div>

                <div className='mx-4 mt-10'>
                    <h1 className='text-lg font-bold text-primaryColor '>Descrição</h1>
                    <h1 className='indent-7 mt-4 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio fugiat nobis! Quaerat similique culpa voluptas obcaecati distinctio. Magni dolor, et facilis magnam cum fugit mollitia nesciunt numquam labore nihil?</h1>
                </div>

            </div>
            <div className='mt-10 pb-20'>
                <Carrosel_Produtos titulo={"Relacionados"} props={prods} />
            </div>
            <Menu_principal />
        </div>
    )
}