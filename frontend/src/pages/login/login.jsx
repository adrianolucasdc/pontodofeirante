import { Link } from "react-router-dom"
import Menu_principal from "../../components/menu_principal/menu_principal"
import { Formik , Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"


import { useState } from "react";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("* Insira um e-mail válido!").required("* Preencha o campos!"),
    senha: Yup.string().required("* Preencha o campos!")
})


export default function Login() {

  

    const [submittedError, setSubmittedError] =useState({hasError: false, type: ""});

    function onClickSubmitted (){
        setSubmittedError(false);
    }

    async function authUser(values){
        const response = await fetch("http://localhost:4000/api/user_login_auth",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(values)
        });

        if (response) {
            const data = await response.json();

            if (data.erro) {
                setSubmittedError({hasError: true, type: data.erro})
                setTimeout(() => {
                    setSubmittedError({hasError: false, type: ""})
                }, 10000);
            }
            if (data.redirect){
                window.location.href = data.redirect;
            }            

        }
    }


    return (
        <div className=" h-screen flex flex-col left ">
            <div className=" ml-6 mt-7">
                <Link to="/perfil">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className=" w-full h-full flex  items-center justify-center">
                <div className=" flex flex-col items-center justify-center w-80 mx-6 px-5 rounded-xl border-2
                 border-primaryColor shadow-2xl">
                
                    <div>
                        <h1 className=" font-extrabold text-4xl text-primaryColor mt-6">Entrar</h1>
                    </div>

                    {submittedError.hasError &&
                        <div>
                            <div className="fixed flex justify-between px-2 pt-[6px]  w-[80%] h-[40px] bg-red-400 rounded-md border-red-800 border-2 opacity-[0.9] left-1/2 top-[25%] translate-x-[-50%] translate-y-[-50%]">
                                <span className='text-white text-center'><span className='font-bold'>{submittedError.type}</span></span>
                                <span onClick={onClickSubmitted} className='text-white text-center font-bold ml-0'>X</span>
                            </div>
                        </div>
                    }
                    
                    <div className="flex flex-col  h-full w-full mx-3">
                        <Formik
                        initialValues={{email : "",senha: ""}}
                        onSubmit={values =>
                        authUser(values)}
                        validationSchema={validationSchema}
                        >
                            {({handleSubmit})=>(
                                <Form onSubmit={handleSubmit}>
                                    <div className=" mb-3 flex justify-center flex-col">
                                        <div>
                                            <label htmlFor="email">E-mail:</label>
                                            <Field type="email" name="email" className={" border-primaryColor border-2 rounded-md w-full h-9 pl-2"}
                                            placeholder="Insira seu e-mail..."/>
                                        </div>
                                        <div className=" text-red-600 text-sm pl-3">
                                            <ErrorMessage name="email" />
                                        </div>
                                    </div>
                                    <div className="h9 "> 
                                        <label htmlFor="senha">Senha:</label>
                                        <Field type="password" name="senha" className={" border-primaryColor border-2 rounded-md w-full h-9 pl-2"}
                                        placeholder="Insira sua senha..."/>
                                    </div>
                                    <div className=" text-red-600 text-sm h-10 pl-3">
                                        <ErrorMessage name="senha" component="div"/>
                                    </div>
                                    <div className="flex justify-center mb-5">
                                        <button type="submit" className=" h-9 w-36 bg-secundaryColor rounded-xl active:bg-primaryColor active:text-secundaryColor">Entrar</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="w-full h-full mb-3">
                        <Link to="/cadastro_user">
                            <div className=" flex flex-col items-center">
                                <p className=" text-primaryColor">Não possui cadastro?</p>
                                <p className="text-linkColor underline visited:text-blue-950">Cadastre-já</p>
                            </div>
                        </Link>
                    </div>
                </div>

                
            </div>

            <Menu_principal />
        </div>
    )
}