import { Routes, Route} from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes';


import Home from '../pages/home/home';
import Favoritos from '../pages/favoritos/favoritos';
import Perfil from '../pages/perfil/perfil';
import Sacola from '../pages/sacola/sacola';
import Sua_loja_login from '../pages/sua_loja/sua_loja_login/sua_loja_login'
import Sua_loja_iniciar from '../pages/sua_loja/sua_loja_cadastro/sua_loja_iniciar';
import Sua_loja_cadastro from '../pages/sua_loja/sua_loja_cadastro/sua_loja_cadastro'
import Sua_loja_termos from '../pages/sua_loja/sua_loja_cadastro/sua_loja_termos';
import Login from '../pages/login/login';
import Cadastro_user from '../pages/cadastro_user/cadastro_user';
import Produtos from '../pages/sua_loja/produtos/produtos';
import TermosUser from '../pages/cadastro_user/termos_de_user';
import Dashboard from '../pages/sua_loja/Dashboard/dashboard'
import Controle from '../pages/sua_loja/controle/controle';
import Minha_loja from '../pages/sua_loja/minha_loja/minha_loja';
import Historico_pedidos from '../pages/sua_loja/historico_pedidos/historico_pedidos';
import Add_produto from '../pages/sua_loja/produtos/add_produto/add_produto';



function RoutesApp() {
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/favoritos' element={ <Favoritos/> }/>
            <Route path='/sacola' element={ <Sacola/> }/>
            <Route path='/sualoja' element={ <Sua_loja_iniciar/> }/>
            <Route path='sua_loja_cadastro' element={ <Sua_loja_cadastro/> } />
            <Route path='/termosecondicoes' element= { <Sua_loja_termos/> } />
            <Route path='/perfil' element={ <Perfil/> }/>
            <Route path='/login' element={ <Login/> } />
            <Route path='/cadastro_user' element={ <Cadastro_user/> } />
            <Route path='/termos_user' element={<TermosUser/>}/>
            <Route path='/produtos' element={ <Produtos/> } />
            <Route path='/dashboard' element={ <Dashboard/> } />
            <Route path='/controle' element={ <Controle/> } />
            <Route path='/minhaloja' element={ <Minha_loja/> } />
            <Route path='/historicodepedidos' element={ <Historico_pedidos/> } />
            <Route path='/addproduto' element={ <Add_produto/> } />
            <Route path='/sua_loja_login' element={ <Sua_loja_login/> }/>

        </Routes>
    )
}

export default RoutesApp;