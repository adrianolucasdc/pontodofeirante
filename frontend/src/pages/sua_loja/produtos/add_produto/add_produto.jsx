import { React, useState } from 'react'
import { Link } from "react-router-dom"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Form, Field, Formik } from "formik";
import * as Yup from 'yup'
import { ErrorMessage } from "formik";
import { FaUpload } from "react-icons/fa";

import Cad_produtos_info from '../../../../components/cad_produtos_info/cad_produtos_info';
import campoPreencher from '../../../../components/formularios/input';

const validationSchema = Yup.object().shape({ // criando esquema de validação
    nomeProduto: Yup.string().required('Campo obrigatório!'),
    qtdProduto: Yup.number().required('Campo obrigatório!'),
    preco: Yup.number().required('Campo obrigatório!'),
    categoria: Yup.string().required('Campo obrigatório!'),
    cores: Yup.string().required('Campo obrigatório!'),
    tamanho: Yup.number().required('Campo obrigatório!'),
    desconto: Yup.number(),
    imgproduto: Yup.mixed().required('Campo obrigatório!')
})

const categoriaItems = [
    { value: "feminino", label: "Feminino" },
    { value: "masculino", label: "Masculino" },
    { value: "bigsize", label: "Big size" },
    { value: "descontos", label: "Descontos" },
    { value: "feminino", label: "Feminino" },
]

const coresPecas = [
    { value: "amarelo", label: "amarelo" },
    { value: "azul", label: "azul" },
    { value: "azul_bebe", label: "azul bebe" },
    { value: "azul_marinho", label: "azul marinho" },
    { value: "azul_turqueza", label: "azul turqueza" },
    { value: "bege", label: "bege" },
    { value: "bordo", label: "bordô" },
    { value: "branco", label: "branco" },
    { value: "caramelo", label: "caramelo" },
    { value: "caqui", label: "caqui" },
    { value: "castanho", label: "castanho" },
    { value: "cinza", label: "cinza" },
    { value: "creme", label: "creme" },
    { value: "laranja", label: "laranja" },
    { value: "lilas", label: "lilas" },
    { value: "marrom", label: "marrom" },
    { value: "mostarda", label: "mostarda" },
    { value: "preto", label: "preto" },
    { value: "rosa", label: "rosa" },
    { value: "rosa_bebe", label: "rosa bebe" },
    { value: "rosa_choque", label: "rosa choque" },
    { value: "roxo", label: "roxo" },
    { value: "salmao", label: "salmao" },
    { value: "verde", label: "verde" },
    { value: "verde-agua", label: "verde agua" },
    { value: "vermelho", label: "vermelho" },
    { value: "vinho", label: "vinho" },
    { value: "violeta", label: "violeta" },
]

const tamanhos = [
    { value: "pp", label: "pp" },
    { value: "m", label: "m" },
    { value: "g", label: "g" },
    { value: "gg", label: "gg" },
    { value: "l", label: "l" },
    { value: "xl", label: "xl" },
]

const animatedComponents = makeAnimated();


export default function Add_produto() {

    const [nomeProduto, setNomeProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [qtdProduto, setQtdProduto] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
    const [coresSelecionada, setCoresSelecionada] = useState([]);
    const [tamanhosSelecionado, setTamanhosSelecionado] = useState([]);

    const [imgProduto, setImgProduto] = useState('');

    const handleSelect = (e) => {
        e.preventDefault();
        setNomeProduto(e.nomeProduto)
        console.log(nomeProduto, categoriaSelecionada, coresSelecionada, tamanhosSelecionado, imgProduto)
    }


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
                        handleSelect(values)
                    }}
                    validationSchema={validationSchema} // esquema de validação yup
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            {campoPreencher("Nome do Produto", "Insira o nome do produto...", "nomeProduto", "text")}
                            <div className=' flex flex-row justify-between'>
                                <div>
                                    <h1 className=" text-primaryColor font-bold">Preço:</h1>
                                    <Field type="number" name="preco" min="0" step="0.01" placeholder="Insira o preço do produto" className=" mb-3 border-primaryColor border-2 rounded-md w-40 h-[42px] pl-2"
                                    />
                                    <ErrorMessage name="preco" component="div" className='error text-red-600 text-sm ml-3 ' />
                                </div>
                                {campoPreencher("Qtd. de produtos", "Insira a quantidade de produtos em estoque...", "qtdProduto", "number") }
                            </div>
                            <div className=' flex flex-row justify-between'>
                                <div>
                                    <h1 className='font-bold text-primaryColor'>Categoria: </h1>
                                    <Field as="select" name="categoria" className=" h-9 border-primaryColor border-2 rounded-md">
                                        <option value="">Selecione</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Moda_praia">Moda praia</option>
                                        <option value="Descontos">Descontos</option>
                                    </Field>
                                    <ErrorMessage name="categoria" component="div" className='error text-red-600 text-sm ml-3' />
                                </div>
                                <div>
                                    <h1 className='font-bold text-primaryColor'>Cores: </h1>
                                    <Field as="select" name="cores" className=" h-9 border-primaryColor border-2 rounded-md">
                                        <option value="">Selecione</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Preto">Preto</option>
                                        <option value="Branco">Branco</option>
                                        <option value="Verde">Verde</option>
                                    </Field>
                                    <ErrorMessage name="cores" component="div" className='error text-red-600 text-sm ml-3' />
                                </div>
                                <div>
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
                                    <ErrorMessage name="tamanho" component="div" className='error text-red-600 text-sm ml-3' />
                                </div>
                            </div>


                            <div className=''>
                                <h1 className='font-bold text-primaryColor'>Foto Produto: </h1>

                                <label htmlFor="imgproduto" className=' mb-3 border-2 border-primaryColor rounded-md flex flex-row items-center pl-5 h-[42px]'>
                                    <FaUpload color="#11111" className=' mr-5' />
                                    Escolha a foto do seu produto
                                </label>
                                <input type="file" name='imgproduto' id="imgproduto" accept="image/*" onChange={e => setImgProduto(e.target.files[0])} className=' hidden' />
                            </div>

                            <div className=' flex flex-row justify-between'>

                                <button
                                    className=" h-9 px-4 bg-secundaryColor rounded-full active:bg-primaryColor active:text-secundaryColor"
                                    type="submit"
                                    onClick={handleSelect}
                                >
                                    Cadastrar Produto
                                </button>

                                <button
                                    className=" h-9 px-4 flex items-center justify-center rounded-full bg-thirdColor xl active:bg-primaryColor active:text-secundaryColor"
                                    type="submit"
                                // onClick={addMore}
                                >
                                    <h1>Adicionar</h1>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                            </div>

                            <Cad_produtos_info />


                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    )
};
