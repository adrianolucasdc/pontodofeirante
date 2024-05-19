import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { Formik, ErrorMessage, Form, Field} from "formik";

import * as Yup from "yup";

import Menu_principal from "../../../components/menu_principal/menu_principal"
import campoPreencher from "../../../components/formularios/input";
import CadastroSucesso from '../../../components/formularios/popup-sucess';
import UserServices from "../../../Services/UserService";


const userServices = new UserServices();


const validationSchema = Yup.object().shape({
    nome: Yup.string().required("* Campo Obrigatório!"),
    razao: Yup.string().required("* Campo Obrigatório!"),
    email: Yup.string().required("* Campo Obrigatório!").email("* Insira um e-mail válido!"),
    telefone: Yup.string().required("* Campo obrigatório!").min(15, "* Insira um telefone válido!"),
    zap: Yup.string().required("* Campo obrigatório!").min(15, "* Insira um telefone válido!"),
    cnpj: Yup.string().required("* Campo Obrigatório!").min(18, "* Insira um CNPJ válido! "),
    senha: Yup.string().required("* Campo obrigatório!").min(8, "* A senha deve conter no mínimo 8 caracteres")
    .matches(/[A-Z]/,"* A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[a-z]/,"* A senha deve conter pelo menos uma letra minúscula")
    .matches(/[0-9]/,"* A senha deve conter pelo menos um número")
    .matches(/[$*&@#()%@!-]/,"* A senha deve conter pelo menos um caracter especial (ex: -, #, *, &)")
    .max(16, "* A senha deve conter no máximo 16 caracteres"),
    confirmSenha: Yup.string().oneOf([Yup.ref("senha"), null], "* As senhas devem corresponder!")
    .required("* Confirmação de senha é obrigatório!"), 
    termos: Yup.boolean().isTrue("* É necessário aceitar os termos de condições!"),
})

export default function Sua_loja_cadastro() {

    //mostrar senha
    const [showPass, setShowPass] = useState(false);
    const [showPass1, setShowPass1] = useState(false);
    const [statusPass, setStatusPass] = useState("password")
    const [statusPass1, setStatusPass1] = useState("password")
    const [fileSvg, setFileSvg] = useState("src/assets/eye-pass-show.svg")
    const [fileSvg1, setFileSvg1] = useState("src/assets/eye-pass-show.svg")

    function onClickButton(){
        if (showPass) {
            setShowPass(false);
            setStatusPass("password")
            setFileSvg("src/assets/eye-pass-show.svg")
        }
        else {
            setShowPass(true);
            setStatusPass("text")
            setFileSvg("src/assets/eye-pass-unshow.svg")
        }
    }

    function onClickButton1(){
        if (showPass1) {
            setShowPass1(false);
            setStatusPass1("password")
            setFileSvg1("src/assets/eye-pass-show.svg")
        }
        else {
            setShowPass1(true);
            setStatusPass1("text")
            setFileSvg1("src/assets/eye-pass-unshow.svg")
        }
    }

    //mostrar erro
    const [submittedError, setSubmittedError] =useState({hasError: false, type: ""});
    const [submitted, setSubmitted] = useState(false);

    function onClickSubmitted (){
        setSubmitted(false);
        setSubmittedError(false);
    }

    //registrar loja
    const handleSubmit = async (values) => {
        try {
            const response = await userServices.registerStore(values);
            
            if (response.existe) {
                setSubmittedError({hasError: true, type: response.existe})
                setTimeout(() => {
                    setSubmittedError({hasError: false, type: ""}) 
                }, 10000);
            } else if (response.redirect) {
                setSubmitted(true)
                setTimeout(() => {
                    navigate(response.redirect)
                }, 5000);
                
            }
            
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className=" h-full flex flex-col">

            <div className=" ml-6 mt-7">
                <Link to="/sualoja">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className=" flex items-center justify-center ">
                <div className=" w-full max-w-[330px] flex flex-col justify-center mt-5 mb-28 px-4 py-10 rounded-xl shadow-2xl">
                    <div>
                        <h1 className=" text-3xl font-bold text-primaryColor">Cadastre sua loja</h1>
                    </div>
                    <div className="mt-6">
                        <Formik
                        initialValues={{nome : "", razao: "", email:"", telefone: "", cnpj: "", senha:"",
                        confirmSenha: "", zap: "", termos:false}}
                        onSubmit={values => {handleSubmit(values);}}
                        validationSchema={validationSchema}
                        >
                            {({handleSubmit})=>(
                                <Form onSubmit={handleSubmit}>
                                    {campoPreencher("Nome Fantasia: ", "Insira o nome fantasia...", "nome","text")}
                                    {campoPreencher("Razão Social: ", "Insira a razão social...", "razao","text")}
                                    <div className="mb-3">
                                        <h1 className=" text-primaryColor font-bold">CNPJ: </h1>
                                        <Field name="cnpj" type="text">
                                        {
                                            ({field}) => (
                                            <IMaskInput {...field}
                                            name="cnpj"
                                            mask="00.000.000/0000-00"
                                            placeholder='Insira o CNPJ...'
                                            className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                            />
                                        )}
                                        </Field>
                                        <ErrorMessage name='cnpj' component="div" className='error text-red-600 text-sm ml-3'/>
                                    </div>

                                    <div className='relative'>
                                        {campoPreencher("Senha: ", "Insira sua senha...", "senha", statusPass)}
                                        <button className='absolute right-2 top-[32px]' type="button" onClick={onClickButton} name='' ><img src={fileSvg} alt="Mostrar Senha" /></button>
                                    </div>
                                    <div className='relative'>
                                        {campoPreencher("Confirme sua senha: ", "Repita sua senha...", "confirmSenha",statusPass1)}
                                        <button className='absolute right-2 top-[32px]' type="button" onClick={onClickButton1} name='' ><img src={fileSvg1} alt="Mostrar Senha" /></button>
                                    </div>
                                    
                                    {campoPreencher("E-mail da Loja: ", "Insira o e-mail da loja...", "email","email")}
                                    <div className="mb-3">
                                        <h1 className=" text-primaryColor font-bold">Número de telefone: </h1>
                                        <Field name="telefone" type="text">
                                        {
                                            ({field}) => (
                                            <IMaskInput {...field}
                                            name="telefone"
                                            mask="(00) 00000-0000"
                                            placeholder='Insira o telefone...'
                                            className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                            
                                            />
                                        )}
                                        </Field>
                                        <ErrorMessage name='telefone' component="div" className='error text-red-600 text-sm ml-3'/>
                                    </div>
                                    <div className="mb-3">
                                        <h1 className=" text-primaryColor font-bold">Número de celular (Whatsapp): </h1>
                                        <Field name="zap" type="text">
                                        {
                                            ({field}) => (
                                            <IMaskInput {...field}
                                            name="zap"
                                            mask="(00) 00000-0000"
                                            placeholder='Insira o celular...'
                                            className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                            />
                                        )}
                                        </Field>
                                        <ErrorMessage name='zap' component="div" className='error text-red-600 text-sm ml-3'/>
                                    </div>
                                    
                                    
                                    
                                    <div className="mb-4 mt-10">
                                        <label>
                                            <Field type='checkbox' name="termos" className="mx-2"/>
                                                Aceito os
                                                <Link to="/termos_user">
                                                    <span className='ml-1 text-secundaryColor underline visited:text-blue-950'>Termos de Condições.</span>
                                                </Link>
                                            <ErrorMessage name='termos' component="div" className='error text-red-600 text-sm ml-3'/>
                                        </label>
                                    </div>                
                                    
                                    <div className='flex justify-center mb-4'>
                                        <button id='submit' type='submit' className=" h-9 w-36 bg-secundaryColor rounded-xl active:bg-primaryColor active:text-secundaryColor">Enviar</button>
                                    </div>
                                    {submitted && <CadastroSucesso />
                                    }
                                    {submittedError.hasError &&
                                    <div>
                                        <div  className="fixed flex justify-between px-2 pt-[6px]  w-[80%] h-[40px] bg-red-400 rounded-md border-red-800 border-2 opacity-[0.9] left-1/2 top-[8%] translate-x-[-50%] translate-y-[-50%]">
                                            <span className='text-white text-center'>Já existe uma loja com esse <span className='font-bold'>{submittedError.type} !</span></span>
                                            <span onClick={onClickSubmitted} className='text-white text-center font-bold ml-0'>X</span>
                                        </div>
                                    </div>
                                    }
                                </Form>
                            )} 

                        </Formik>
                    </div>
                </div>
            </div>
            <Menu_principal />
        </div>
    )
}