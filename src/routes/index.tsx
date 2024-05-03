import { Routes, Route} from 'react-router-dom'

import Home from '../pages/home/home';
import Favoritos from '../pages/favoritos/favoritos';
import Perfil from '../pages/perfil/perfil';
import Sacola from '../pages/sacola/sacola';
import Sua_loja from '../pages/sua_loja/sua_loja';
import Login from '../pages/login/login';
import Cadastro_user from '../pages/cadastro_user/cadastro_user';



function RoutesApp() {
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/favoritos' element={ <Favoritos/> }/>
            <Route path='/sacola' element={ <Sacola/> }/>
            <Route path='/sualoja' element={ <Sua_loja/> }/>
            <Route path='/perfil' element={ <Perfil/> }/>
            <Route path='/login' element={ <Login/> } />
            <Route path='/cadastro_user' element={ <Cadastro_user/>}/>

        </Routes>
    )
}

export default RoutesApp;