import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, validateYupSchema} from 'formik';
import * as Yup from "yup";
import { IMaskInput } from "react-imask";



import Menu_principal from "../../components/menu_principal/menu_principal";
import campoPreencher from "../../components/formularios/input";
import criarUsuario from '../../components/create_objects/CreateObject';
import ReactInputMask from 'react-input-mask';



function mascCelular (valor) {
    return valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d{1,2})/, '$1-$2') 
    .replace(/(-\d{2})\d+?$/, '$1'); 
}
const validationSchema = Yup.object().shape({
    nome: Yup.string().required("* Campo obrigatório!"),
    email: Yup.string().email("* Insira um email válido!").required("* Campo obrigatório!"),
    termos: Yup.boolean().isTrue("* É necessário aceitar os termos de condições!"),
    senha: Yup.string().required("* Campo obrigatório!").min(8, "* A senha deve conter no mínimo 8 caracteres"),
    telefone: Yup.string().required("* Campo obrigatório!").min(15, "* Insira um telefone válido!"),
    cpf: Yup.string().required("* Campo obrigatório!"),
    dataNasc: Yup.string().required("* Campo obrigatório!"),
    sexo: Yup.string().required("* Campo obrigatório!"),
    uf: Yup.string().required("* Campo obrigatório!"),
    cidade: Yup.string().required("* Campo obrigatório!"),
    bairro: Yup.string().required("* Campo obrigatório!"),
    rua:Yup.string().required("* Campo obrigatório!"),
    cep: Yup.string().required("* Campo obrigatório!"),
    numero: Yup.string().required("* Campo obrigatório!"), 
    confirmSenha: Yup.string().oneOf([Yup.ref("senha"), null], "* As senhas devem corresponder!")
    .required("* Confirmação de senha é obrigatório!"), 
})


export default function Cadastro_usercp() {

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
                        onSubmit={values => console.log(values)}
                        validationSchema={validationSchema}
                        >
                        {/* criarUsuario(values.nome, values.email, values.senha, values.telefone, values.cpf,
                            values.cep, values.dataNasc, values.sexo,values.uf, values.cidade, values.rua,
                            values.numero, values.bairro) */}
                            {({handleSubmit}) => (
                                <Form onSubmit={handleSubmit}>
                                    {campoPreencher("Nome Completo:","Insira seu nome...","nome","text")}
                                    {campoPreencher("E-mail: ","Insira seu e-mail...","email","email")}
                                    {campoPreencher("Senha: ", "Insira sua senha...", "senha", "password")}
                                    {campoPreencher("Confirme sua senha: ", "Repita sua senha...", "confirmSenha", "password")}
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
                                        <button type='submit' className=" h-9 w-36 bg-secundaryColor rounded-xl active:bg-primaryColor active:text-secundaryColor">Enviar</button>
                                    </div>
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