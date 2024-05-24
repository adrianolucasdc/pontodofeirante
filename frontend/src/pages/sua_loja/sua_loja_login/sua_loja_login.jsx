import { Link, useNavigate } from "react-router-dom"
import { Formik , Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import { useState } from "react";



import Menu_principal from "../../../components/menu_principal/menu_principal"
import UserServices from "../../../Services/UserService";
import LoginSucess from "../../../components/formularios/loginsucess";



const validationSchema = Yup.object().shape({
    email: Yup.string().email("* Insira um e-mail válido!").required("* Preencha o campos!")
    .matches(/^[a-z.@]*$/, "* Insira um e-mail válido!"),
    senha: Yup.string().required("* Preencha o campos!")
})

const userServices = new UserServices();

export default function Sua_loja_login() {


    //botão mostrar senha
    const [showPass, setShowPass] = useState(false);
    const [statusPass, setStatusPass] = useState("password")
    const [fileSvg, setFileSvg] = useState("src/assets/eye-pass-show.svg")

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

    //Mensagem Erro ao Fazer Login
    const [submittedError, setSubmittedError] =useState({hasError: false, type: ""});
    const [submittedLogged, setSubmittedLogged] =useState(false);

    function onClickSubmitted (){
        setSubmittedError(false);
    }

    //realizar login
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        try {
            const response = await userServices.signInStore(values)
            
            if (response.erro) {
                setSubmittedError({hasError: true, type: response.erro})
                setTimeout(() => {
                    setSubmittedError({hasError: false, type: ""}) 
                }, 10000);
            }
            if (response.msg) {
                setSubmittedLogged(true)
                setTimeout(() => {
                    setSubmittedLogged(false)
                }, 2500);
            }
            if (response.redirect) {
                setTimeout(() => {
                    navigate(response.redirect)
                }, 2500);
            }
        
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=" h-screen flex flex-col left ">
            

            <div className=" w-full h-full flex  items-center justify-center">
                <div className=" flex flex-col items-center justify-center w-80 mx-6 px-5 rounded-xl border-2
                 border-primaryColor shadow-2xl">
                
                    <div>
                        <h1 className=" text-center font-extrabold text-4xl text-primaryColor my-6">Sua Loja <br />Entrar </h1>
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
                        handleSubmit(values)}
                        validationSchema={validationSchema}
                        >
                            {({handleSubmit})=>(
                                <Form onSubmit={handleSubmit}>
                                    <div className=" mb-3 flex justify-center flex-col">
                                        <div>
                                            <label htmlFor="email">E-mail:</label>
                                            <Field type="email" name="email" id="email" className={" border-primaryColor border-2 rounded-md w-full h-[42px] pl-2"}
                                            placeholder="Insira seu e-mail..." autoComplete="email"/>
                                        </div>
                                        <div className=" text-red-600 text-sm pl-3">
                                            <ErrorMessage name="email" />
                                        </div>
                                    </div>
                                    <div className="h9 "> 
                                        <div className="relative">
                                            <label htmlFor="senha">Senha:</label>
                                            <Field type={statusPass} name="senha" id="senha" className={" border-primaryColor border-2 rounded-md w-full h-[42px] pl-2"}
                                            placeholder="Insira sua senha..."/>
                                            <button className='absolute right-2 top-[35px]' type="button" onClick={onClickButton} name='' ><img src={fileSvg} alt="Mostrar Senha" /></button>
                                        </div>
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
                        <Link to="/sualoja">
                            <div className=" flex flex-col items-center">
                                <p className=" text-primaryColor">Não possui cadastro?</p>
                                <p className="text-linkColor underline visited:text-blue-950">Cadastre-já</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {
                submittedLogged &&  <LoginSucess />
                }
            </div>

            <Menu_principal />
        </div>
    )
}