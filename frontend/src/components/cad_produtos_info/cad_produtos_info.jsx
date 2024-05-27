import { React, useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { Form, Field, Formik } from "formik";
import * as Yup from 'yup'
import { ErrorMessage } from "formik";
import { FaUpload } from "react-icons/fa";

// import campoPreencher from '../../../../components/formularios/input';

// const validationSchema = Yup.object().shape({ // criando esquema de validação
//     qtdProduto: Yup.number().required('Campo obrigatório!'),
//     categoria: Yup.string().required('Campo obrigatório!'),
//     cores: Yup.string().required('Campo obrigatório!'),
//     tamanho: Yup.number().required('Campo obrigatório!'),
//     imgproduto: Yup.mixed().required('Campo obrigatório!')
// })

// const categoriaItems = [
//     { value: "feminino", label: "Feminino" },
//     { value: "masculino", label: "Masculino" },
//     { value: "bigsize", label: "Big size" },
//     { value: "descontos", label: "Descontos" },
//     { value: "feminino", label: "Feminino" },
// ]

// const coresPecas = [
//     { value: "amarelo", label: "amarelo" },
//     { value: "azul", label: "azul" },
//     { value: "azul_bebe", label: "azul bebe" },
//     { value: "azul_marinho", label: "azul marinho" },
//     { value: "azul_turqueza", label: "azul turqueza" },
//     { value: "bege", label: "bege" },
//     { value: "bordo", label: "bordô" },
//     { value: "branco", label: "branco" },
//     { value: "caramelo", label: "caramelo" },
//     { value: "caqui", label: "caqui" },
//     { value: "castanho", label: "castanho" },
//     { value: "cinza", label: "cinza" },
//     { value: "creme", label: "creme" },
//     { value: "laranja", label: "laranja" },
//     { value: "lilas", label: "lilas" },
//     { value: "marrom", label: "marrom" },
//     { value: "mostarda", label: "mostarda" },
//     { value: "preto", label: "preto" },
//     { value: "rosa", label: "rosa" },
//     { value: "rosa_bebe", label: "rosa bebe" },
//     { value: "rosa_choque", label: "rosa choque" },
//     { value: "roxo", label: "roxo" },
//     { value: "salmao", label: "salmao" },
//     { value: "verde", label: "verde" },
//     { value: "verde-agua", label: "verde agua" },
//     { value: "vermelho", label: "vermelho" },
//     { value: "vinho", label: "vinho" },
//     { value: "violeta", label: "violeta" },
// ]

// const tamanhos = [
//     { value: "pp", label: "pp" },
//     { value: "m", label: "m" },
//     { value: "g", label: "g" },
//     { value: "gg", label: "gg" },
//     { value: "l", label: "l" },
//     { value: "xl", label: "xl" },
// ]

// const animatedComponents = makeAnimated();

export default function Cad_produtos_info() {

    // const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
    // const [coresSelecionada, setCoresSelecionada] = useState([]);
    // const [tamanhosSelecionado, setTamanhosSelecionado] = useState([]);
    // const [imgProduto, setImgProduto] = useState('');

    // const handleSelect = (e) => {
    //     e.preventDefault();
    //     console.log(categoriaSelecionada, coresSelecionada, tamanhosSelecionado, imgProduto)
    // }

    return (
        <div className=' my-3 border-2 border-primaryColor rounded-md flex flex-row items-center pl-5 h-[42px]'>
            
            
        </div>
    )
};