import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import { IMaskInput } from "react-imask";




import Menu_principal from "../../components/menu_principal/menu_principal";
import campoPreencher from "../../components/formularios/input";








const validationSchema = Yup.object().shape({
    nome: Yup.string().required("* Campo obrigatório!"),
    email: Yup.string().email("* Insira um email válido!").required("* Campo obrigatório!"),
    termos: Yup.boolean().isTrue("* É necessário aceitar os termos de condições!"),
    senha: Yup.string().required("* Campo obrigatório!").min(8, "* A senha deve conter no mínimo 8 caracteres")
    .matches(/[a-z]/,"* A senha deve conter pelo menos uma letra minúscula")
    .matches(/[A-Z]/,"* A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[0-9]/,"* A senha deve conter pelo menos um número")
    .matches(/[$*&@#()@!-]/,"* A senha deve conter pelo menos um caracter especial (ex: -, #, *, &)")
    .max(16, "* A senha deve conter no máximo 16 caracteres"),
    telefone: Yup.string().required("* Campo obrigatório!").min(15, "* Insira um telefone válido!"),
    cpf: Yup.string().required("* Campo obrigatório!").min(14, "* Insira um cpf válido!"),
    dataNasc: Yup.date()
    .min(new Date(2000,0,1), "* Para fazer o cadastro é necessário ter mais de 10 anos!")
    .required("* Campo obrigatório!"),
    sexo: Yup.string().required("* Campo obrigatório!"),
    uf: Yup.string().required("* Campo obrigatório!"),
    cidade: Yup.string().required("* Campo obrigatório!"),
    bairro: Yup.string().required("* Campo obrigatório!"),
    rua:Yup.string().required("* Campo obrigatório!"),
    cep: Yup.string().required("* Campo obrigatório!").min(9, "* Insira um cep válido!"),
    numero: Yup.string().required("* Campo obrigatório!"), 
    confirmSenha: Yup.string().oneOf([Yup.ref("senha"), null], "* As senhas devem corresponder!")
    .required("* Confirmação de senha é obrigatório!"), 
})




export default function Cadastro_user() {
    // const [showPass, setShowPass] = useState(false);
    // const [statusPass, setStatusPass] = useState("password")
    // const [fileSvg, setFileSvg] = useState("src/assets/eye-pass-show.svg")
    // const [fileSvg1, setFileSvg1] = useState("src/assets/eye-pass-show.svg")

    // function onClickButton(){
    //     if (showPass) {
    //         setShowPass(false);
    //         setStatusPass("password")
    //         setFileSvg("src/assets/eye-pass-show.svg")
    //     }
    //     else {
    //         setShowPass(true);
    //         setStatusPass("text")
    //         setFileSvg("src/assets/eye-pass-unshow.svg")
    //     }
    // }

    // const [showPass1, setShowPass1] = useState(false);
    // const [statusPass1, setStatusPass1] = useState("password")
    // function onClickButton1(){
    //     if (showPass1) {
    //         setShowPass1(false);
    //         setStatusPass1("password")
    //         setFileSvg1("src/assets/eye-pass-show.svg")
    //     }
    //     else {
    //         setShowPass1(true);
    //         setStatusPass1("text")
    //         setFileSvg1("src/assets/eye-pass-unshow.svg")
    //     }
    // }

    async function handleForm(values){
        try{
            const response = await fetch("http://localhost:3000/api/cadastro_usuario", {
                method : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(values)
            });
        }catch (err){
            console.log(err);
        }
    }
    

    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="">
            <div className=" ml-6 mt-7">
                <Link to="/login">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>
            <div className="  flex justify-center items-center mt-5">
                
                <div className=" flex flex-col items-center justify-center w-80 mb-32 px-5 rounded-xl border-2 border-primaryColor shadow-2xl">
                    <h1 className=" font-extrabold text-4xl text-primaryColor mt-6">Cadastre seu usuário</h1>
                    <div className="flex flex-col  mt-6 h-full w-full mx-3">
                        <Formik 
                        initialValues={{nome : "", email : "", senha: "", confirmSenha: "", telefone: "", cpf : "", dataNasc : "", sexo: "", 
                        cep: "", uf: "", cidade : "", rua : "", numero: "", bairro: "", termos: false }}
                        onSubmit={values => {
                            handleForm(values);
                            setSubmitted(true);
                            setTimeout(()=>{
                                setSubmitted(false);
                            }, 3000)}
                        }
                        validationSchema={validationSchema}
                        >
                            {({handleSubmit}) => (
                                <Form onSubmit={handleSubmit}>
                                    {campoPreencher("Nome Completo:","Insira seu nome...","nome","text")}
                                    {campoPreencher("E-mail: ","Insira seu e-mail...","email","email")}
                                    <div className='relative'>
                                        {campoPreencher("Senha: ", "Insira sua senha...", "senha", "password")}
                                        {/* <button className='absolute right-2 top-[32px]' type="button" onClick={onClickButton} name='' ><img src={fileSvg} alt="Mostrar Senha" /></button> */}
                                    </div>
                                    <div className='relative'>
                                        {campoPreencher("Confirme sua senha: ", "Repita sua senha...", "confirmSenha","password")}
                                        {/* <button className='absolute right-2 top-[32px]' type="button" onClick={onClickButton1} name='' ><img src={fileSvg1} alt="Mostrar Senha" /></button> */}
                                    </div>
                                    
                                    <div className=" mb-3">
                                        <h1 className=" text-primaryColor">Número de celular: </h1>
                                        <Field name="telefone" type="text">
                                        {
                                            ({field}) => (
                                            <IMaskInput {...field}
                                            name="telefone"
                                            mask="(00) 00000-0000"
                                            placeholder='Insira seu celular...'
                                            className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                            />
                                        )}
                                        </Field>

                                        <ErrorMessage name='telefone' component="div" className='error text-red-600 text-sm ml-3'/>
                                    </div>
                                    
                                    <div className=" mb-3">
                                        <h1 className=" text-primaryColor">Insira seu CPF:</h1>
                                        <Field name="cpf">{({field}) => (
                                            <IMaskInput {...field}
                                            name="cpf"
                                            mask="000.000.000-00"
                                            placeholder='Insira seu CPF...'
                                            className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                            />
                                        )}</Field>
                                        <ErrorMessage name='cpf' component="div" className='error text-red-600 text-sm ml-3'/>
                                    </div>
                                    
                                    <div className='flex justify-between mb-3'>
                                        <div className='w-[80%]'>
                                            <span>Data de Nascimento: </span>
                                            <Field type="date" name="dataNasc" className="pl-2 w-11/12 h-9 border-primaryColor border-2 rounded-md"/>
                                            <ErrorMessage name='dataNasc' component="div" className='error text-red-600 text-sm ml-3'/>
                                        </div>
                                        <div className='overflow-hidden w-[47%]'>
                                            <span className='block'>Sexo: </span>
                                            <Field as="select" name="sexo" className=" h-9 border-primaryColor border-2 rounded-md">
                                                <option value="">Selecione</option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Feminino">Feminino</option>
                                            </Field>
                                            
                                            <ErrorMessage name='sexo' component="div" className='error text-red-600 text-sm ml-3'/>
                                            
                                            
                                        </div>
                                    </div>

                                    <div className=' mb-3 mt-7 py-1 text-center bg-gradient-to-r from-lineColor from-10% via-zinc-300 via-50% to-lineColor to-90% rounded-md'>
                                        <span className='font-extrabold text-lg'>Endereço</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <div>
                                            <h1 className=" text-primaryColor">Insira seu CEP:</h1>
                                            <Field name="cep">{({field}) => (
                                                <IMaskInput {...field}
                                                name="cep"
                                                mask="00000-000"
                                                placeholder='Insira seu CEP...'
                                                className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                                />
                                            )}</Field>
                                            <ErrorMessage name='cep' component="div" className='error text-red-600 text-sm ml-3'/>
                                        </div>
                                        <div className='w-36 overflow-hidden ml-4'>
                                            {campoPreencher("Número: ", "Insira o número...","numero")}
                                        </div>
                                    </div>

                                    {campoPreencher("Estado: ","Insira seu estado...", "uf", "text")}
                                    {campoPreencher("Cidade: ", "Insira sua cidade...","cidade","text")}
                                    {campoPreencher("Bairro: ","Insira seu bairro...","bairro","text")}
                                    {campoPreencher("Rua: ", "Insira sua rua...","rua")}

                                    <div className="h-3 "></div>

                                    <div className='mb-2'>
                                        <label>
                                            <Field type='checkbox' name="termos" className="mx-2"/>
                                            Aceito os
                                            <Link to="/termos_user">
                                                <span className='ml-1 text-linkColor underline visited:text-blue-950'>Termos de Condições</span>
                                            </Link>
                                            <ErrorMessage name='termos' component="div" className='error text-red-600 text-sm ml-3'/>
                                        </label>
                                    </div>
                                    <div className='flex justify-center mb-4'>
                                        <button id='submit' type='submit' className=" h-9 w-36 bg-secundaryColor rounded-xl active:bg-primaryColor active:text-secundaryColor">Enviar</button>
                                    </div>
                                    {submitted && 
                                    <div>
                                        <div className="fixed  px-5 pt-1  w-[75%] h-[40px] bg-lime-200 rounded-md border-green-800 border-2 opacity-[0.9] left-1/2 top-[8%] translate-x-[-50%] translate-y-[-50%]">
                                            <span className='text-lime-600 text-center'>Usuário criado com sucesso!</span>
                                        </div>
                                    </div>}
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