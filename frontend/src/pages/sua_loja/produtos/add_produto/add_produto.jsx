import { React, useState } from 'react'
import { Link } from "react-router-dom"

import { MdKeyboardArrowLeft } from "react-icons/md";
import { Form, Field, Formik, useFormik, ErrorMessage } from "formik";
import * as Yup from 'yup'

import campoPreencher from '../../../../components/formularios/input';
import pictureInput from '../../../../components/pictureInput/pictureInput';
import ProdutosObj from './ProdutosObj';


const validationSchema = Yup.object().shape({ // criando esquema de validação
    nomeProduto: Yup.string().required('Campo obrigatório!')
    .matches(/^[a-zA-Z- ]*$/, "* É permitido somente letras e hífen!"),
    preco: Yup.number().required('Campo obrigatório!'),
    qtdProduto: Yup.number().required('Campo obrigatório!'),
    categoria: Yup.string().required('Campo obrigatório!'),
    cores: Yup.string().required('Campo obrigatório!'),
    tamanho: Yup.string().required('Campo obrigatório!'),
    desconto: Yup.number(),
    imgproduto: Yup.mixed().required('Imagem Obrigatória')
        
        .test("fileSize", "Your image is too big :(", value => {

      
            return value && value.size <= 262144000;
          })
})


export default function Add_produto() {

    const [inputImg, setInputImg] = useState('Escolha a foto do seu produto')
    const [imagem, setImagem] = useState(null)


    const [produtos, setProdutos] = useState([])
    const [ids, setIds] = useState(0);

    const printValue = (values) => {
        setIds(ids + 1)

        setProdutos([...produtos, {
            id: ids,
            nomePrd: values.nomeProduto,
            precoPrd: values.preco,
            qtdPrd: values.qtdProduto,
            categoriaPrd: values.categoria,
            corPrd: values.cores,
            tamanhosPrd: values.tamanho,
            imgproduto: values.imgproduto
        }])


    }

    const handleTaskDeletion = (prodId) => {
        const newProduct = produtos.filter(prods => prods.id != prodId)
        setProdutos(newProduct)
    }



    const formik = useFormik({
        initialValues: {
            imgproduto: ''
        },
        onSubmit: () => {
            console.log('Submitted')
        },
    })

    const handleChange = (e) => {
        formik.setFieldValue('imgproduto', e.target.files[0]);
        console.log(e.target.files[0].name)
        setInputImg(e.target.files[0].name)
        setImagem(e.target.files[0])
    };


    return (
        <div className=" h-full flex flex-col">
            <div className=" mx-6 mt-7">
                <div>
                    <Link to="/produtos">
                        <MdKeyboardArrowLeft size={30} className=" text-primaryColor" />
                    </Link>
                </div>
                <div className=" mt-5 mb-4">
                    <h1 className=" text-primaryColor text-xl font-bold">Adicione um produto a sua loja</h1>
                </div>
                <Formik
                    initialValues={{ nomeProduto: '', preco: '', qtdProduto: '', categoria: '', cores: '', tamanho: '', imgproduto: null }}
                    onSubmit={values => {
                        printValue(values)

                    }}
                    validationSchema={validationSchema} // esquema de validação yup
                >
                    {({ handleSubmit }) => (
                        <Form className=' mb-4' onSubmit={handleSubmit}>
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
                                        <option value="Infantil">Infantil</option>
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
                                        <option value="PP">PP</option>
                                        <option value="P">P</option>
                                        <option value="M">M</option>
                                        <option value="G">G</option>
                                        <option value="GG">GG</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </Field>
                                    <ErrorMessage name="tamanho" component="div" className='error text-red-600 text-sm' />
                                </div>
                            </div>


                            <div className=''>
                                <h1 className=' mt-3 font-bold text-primaryColor'>Foto Produto: </h1>

                                {/* <label htmlFor="imgproduto" className=' mb-3 border-2 border-primaryColor rounded-md flex flex-row items-center pl-5 h-[42px]'>
                                    <FaUpload color="#11111" className=' mr-5' />
                                    {inputImg}
                                </label> */}
                                <Field  name="imgproduto" component={pictureInput} />
                                {/* <input
                                    type="file"
                                    className=' hidden'
                                    name='imgproduto'
                                    id='imgproduto'
                                    accept='/image/*'
                                    onChange={handleChange}
                                /> */}
                                <h1></h1>
                                <ErrorMessage name="imgproduto" component="div" className='error text-red-600 text-sm' />
                            </div>

                            <button
                                className=" h-9 px-4 bg-secundaryColor rounded-full mt-4 active:bg-primaryColor active:text-secundaryColor"
                                type="submit"
                                id='submit'
                            >
                                Cadastrar Produto
                            </button>

                            <div className='bg-whitev min-h-20 border-2 border-primaryColor rounded-lg my-3'>
                                <ProdutosObj
                                    prods={produtos}
                                    handleTaskDeletion={handleTaskDeletion} />
                            </div>


                            <button
                                className=" h-9 px-4 flex items-center justify-center rounded-full bg-thirdColor xl active:bg-primaryColor active:text-secundaryColor"
                                type="button"
                            >
                                <h1>Adicionar a loja</h1>
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
