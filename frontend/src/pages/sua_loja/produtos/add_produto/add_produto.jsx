import { React } from 'react'

import { Link } from "react-router-dom"

import { MdKeyboardArrowLeft } from "react-icons/md";
import { Form, Field, Formik } from "formik";
import * as Yup from 'yup'
import { ErrorMessage } from "formik";
import campoPreencher from '../../../../components/formularios/input';

const validationSchema = Yup.object().shape({ // criando esquema de validação
    nomeProduto: Yup.string().required('Campo obrigatório!'),
    qtdProduto: Yup.number().required('Campo obrigatório!'),
    preco: Yup.number().required('Campo obrigatório!'),
    categoria: Yup.string().required('Campo obrigatório!'),
    cores: Yup.string().required('Campo obrigatório!'),
    tamanho: Yup.number().required('Campo obrigatório!'),
    desconto: Yup.number()
})


export default function Add_produto() {

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
                    initialValues={{ nomeProduto: '', qtdProduto: '', preco: '', categoria: '', cores: '', tamanho: '' }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                    validationSchema={validationSchema} // esquema de validação yup
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            {campoPreencher("Nome do Produto", "Insira o nome do produto...", "nomeProduto", "text")}
                            {campoPreencher("Quantidade de produtos", "Insira a quantidade de produtos em estoque...", "qtdProduto", "number")}
                            <div>
                                <Field type="number" name="preco" min="0" step="0.01" />
                                <ErrorMessage name="preco" component="div" className="error" />
                            </div>
                            <div>
                                <Field as="select" name="categoria" className=" h-9 border-primaryColor border-2 rounded-md">
                                    <option value="">Selecione</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Infantil">Infantil</option>
                                    <option value="BigSize">Big Size</option>
                                    <option value="Descontos">Descontos</option>
                                </Field>
                                <ErrorMessage name="categoria" component="div" className="error" />
                            </div>
                            <div>
                                <Field type="text" name="cores" />
                                <ErrorMessage name="cores" component="div" className="error" />
                            </div>
                            <div>
                                <Field as="select" name="tamanho" >
                                    <option value="">Selecione</option>
                                    <option value="P">P</option>
                                    <option value="PP">PP</option>
                                    <option value="M">M</option>
                                    <option value="G">G</option>
                                    <option value="GG">GG</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </Field>
                                <ErrorMessage name="tamanho" component="div" className="error" />
                            </div>

                            <button className=" h-9 w-36 bg-secundaryColor rounded-xl active:bg-primaryColor active:text-secundaryColor" type="submit">Cadastrar Produto</button>
                        </Form>
                    )}

                </Formik>

            </div>
        </div>
    )
};
