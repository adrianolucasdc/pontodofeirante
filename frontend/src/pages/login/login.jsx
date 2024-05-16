import { Link } from "react-router-dom"
import Menu_principal from "../../components/menu_principal/menu_principal"
import { Formik , Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"

import campoPreencher from "../../components/formularios/input";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("* Insira um e-mail válido!").required("* Preencha os campos!"),
    senha: Yup.string().required("* Preencha os campos!")
})


export default function Login() {



    return (
        <div className=" h-screen flex flex-col left ">
            <div className=" ml-6 mt-7">
                <Link to="/perfil">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className=" w-full h-full flex  items-center justify-center">
                <div className=" flex flex-col items-center justify-center w-80 h-96 mx-6 px-5 rounded-xl border-2
                 border-primaryColor shadow-2xl">
                
                    <div>
                        <h1 className=" font-extrabold text-4xl text-primaryColor mt-6">Entrar</h1>
                    </div>
                    
                    <div className="flex flex-col  mt-6 h-full w-full mx-3">
                        <Formik
                        initialValues={{email : "",senha: ""}}
                        onSubmit={values =>
                        console.log(values)}
                        validationSchema={validationSchema}
                        >
                            {({handleSubmit})=>(
                                <Form onSubmit={handleSubmit}>
                                    <div className="h9 mb-3">
                                        <label htmlFor="email">E-mail:</label>
                                        <Field type="email" name="email" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                        placeholder="Insira seu e-mail..."/>
                                    </div>
                                    <div className="h9 "> 
                                        <label htmlFor="senha">Senha:</label>
                                        <Field type="password" name="senha" className=" border-primaryColor border-2 rounded-md w-full h-9 pl-2"
                                        placeholder="Insira sua senha..."/>
                                    </div>
                                    <div className="error text-red-600 text-sm h-10 pl-3 pt-[10px]">
                                        <ErrorMessage name="email"/>
                                    </div>
                                    <div className="flex justify-center mb-5">
                                        <button type="submit" className=" h-9 w-36 bg-secundaryColor rounded-xl active:bg-primaryColor active:text-secundaryColor">Entrar</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="w-full h-full">
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