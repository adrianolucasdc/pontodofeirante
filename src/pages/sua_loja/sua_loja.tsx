import Menu_principal from "../../components/menu_principal/menu_principal";

import Draw_feira from "../../assets/desenho_feira.png"


export default function Sua_loja() {
    return(
        <div>
            <div>
                <h1>Inicie suas vendas conosco</h1>
                <h1>com o <p>.doFeirante</p> é ainda mais fácil vender online</h1>
                <div>
                    <img src={Draw_feira} alt="" />
                </div>
            </div>
            <Menu_principal/>
        </div>
    )
}