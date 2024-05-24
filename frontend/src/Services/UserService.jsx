import axios from 'axios'
import Cookies from "universal-cookie"



const cookies = new Cookies();

export default class UserServices{
    constructor () {
        this.axios = axios.create({
            baseURL: import.meta.env.VITE_REACT_APP_LOGIN_API
        })
    }

    //registrar usuário
    async registerUser(dados){
        const {data} = await this.axios.post("/api/register_user", dados);
        
        if (data.existe) {
            return data;
        }
        return data
    }

    //registrar loja
    async registerStore(dados){
        const {data} = await this.axios.post("/api/register_store", dados);

        if (data.existe) {
            return data;
        }
        return data
    }

    //login usuário
    async signInUser(dados) {
        const {data} = await this.axios.post("/api/user_login", {
            email: dados.email, senha:dados.senha 
        }, {withCredentials:true });

        if (data.token ) {
            cookies.set("t0k3N_user", data.token)
        }

        return data;
    }

    //login loja
    async signInStore(dados){
        const {data} = await this.axios.post("/api/store_login", {
            email: dados.email, senha:dados.senha 
        }, {withCredentials:true });

        return data;
    }
        

    //     if (!data.erro) {
    //         localStorage.setItem("nome", data.user.name);
    //         localStorage.setItem("email", data.user.email);

            
    //         cookies.set("t0k3n_store", data.user.token, {
    //             httpOnly: true,
    //             sameSite:true,
    //             secure: true,
    //         });
    //     }

    //     return data;

    // }

    //autenticar token usuario ou loja
    async userAutheticatedUser (){
        const token = cookies.get("t0k3N_user")
        
        try{
            const {data} = await this.axios.post("/api/validate_token", {token: token})
            return true;
        } catch {
            return false;
        }
    }

    async userAutheticatedStore (){
        const token = cookies.get("t0k3N_store")

        try {
            const {data} = await this.axios.post("/api/validate_token", {token: token})
        } catch {
            return false;
        }
    }

    async logoutUser(){
        cookies.remove("t0k3N_user")
    }

    async logoutStore(){
        cookies.remove("t0k3N_store")
    }


}