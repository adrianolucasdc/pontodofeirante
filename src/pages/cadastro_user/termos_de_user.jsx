import React from 'react'
import { Link } from "react-router-dom"
import Menu_principal from '../../components/menu_principal/menu_principal'



export default function TermosUser() {
    return (
        <div className=" h-full flex flex-col">

            <div className=" ml-6 mt-7">
                <Link to="/cadastro_user">
                    <svg className=" fill-primaryColor" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                </Link>
            </div>

            <div className=" flex items-center justify-center ">
                <div className=" max-w-[330px] flex flex-col justify-center mt-5 mb-28 px-4 py-10 rounded-xl shadow-2xl">
                    <h1 className=" text-3xl font-bold text-primaryColor">Termos e Condições de Uso</h1>
                    <div className=" text-xl text-justify text-primaryColor">
                        <p className='mt-10 mb-3 font-extrabold'>
                            1. Aceitação dos Termos
                        </p>
                        <p className='indent-4'>
                            Ao acessar e usar nosso site, você concorda com os seguintes termos e condições. Se você não concorda com algum destes termos, por favor, não continue a usar o site.
                        </p>
                        <p className='mt-7 mb-3 font-extrabold'>
                            2. Compras e Pagamentos
                        </p>
                        <p className='indent-4'>
                            Você pode comprar itens de feiras e varejos de roupas através do nosso site.
                            Os preços dos produtos são exibidos em nossa plataforma e estão sujeitos a alterações sem aviso prévio.
                            O pagamento deve ser feito no momento da compra. Aceitamos cartões de crédito, transferências bancárias e outras formas de pagamento especificadas no site.
                        </p>
                        <p className='mt-7 mb-3 font-extrabold'>
                            3. Entrega e Devoluções
                        </p>
                        <p className='indent-4'>
                            Faremos o possível para entregar os produtos dentro do prazo estipulado. No entanto, não nos responsabilizamos por atrasos causados por terceiros (como transportadoras).
                            Caso você queira devolver um produto, consulte nossa política de devolução para obter informações detalhadas.
                        </p>
                        <p className='mt-7 mb-3 font-extrabold'>
                            4. Responsabilidade
                        </p>
                        <p className='indent-4'>
                            Não garantimos a qualidade ou autenticidade dos produtos vendidos por terceiros em nosso site.
                            Você é responsável por manter suas credenciais de login seguras e não compartilhá-las com terceiros.
                            Não nos responsabilizamos por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do nosso site.
                        </p>

                        <p className='mt-7 mb-3 font-extrabold'>
                            5. Propriedade Intelectual
                        </p>
                        <p className='indent-4'>
                            Todo o conteúdo do site, incluindo textos, imagens e logotipos, é protegido por direitos autorais e não pode ser reproduzido sem nossa autorização.
                        </p>
                        <p className='mt-7 mb-3 font-extrabold'>
                            6. Alterações nos Termos
                        </p>
                        <p className='indent-4'>
                            Reservamo-nos o direito de alterar estes termos e condições a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.
                        </p>
                        <div className='flex justify-center mt-5 flex-col items-center'>
                            <span className='text-lg indent-4'>Declaro que li os termos de condições e Uso :</span>
                            <div className='text- mt-3 h-9 w-20 bg-secundaryColor rounded-xl flex justify-center items-center'>
                                <Link to="/cadastro_user"> Sim </Link>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
            <Menu_principal/>
        </div>
    )
}