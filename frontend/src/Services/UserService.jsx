import axios from 'axios'



export default class UserServices{
    constructor () {
        this.axios = axios.create({
            baseURL: import.meta.env.VITE_REACT_APP_LOGIN_API
        })
    }

    async signIn(dados) {
        const {data} = await this.axios.post("/api/user_login_auth", {
            email: dados.email, senha:dados.senha 
        });

        if (!data.erro) {
            localStorage.setItem("nome", data.user.name);
            localStorage.setItem("email", data.user.email);
            localStorage.setItem("token", data.user.token);

            return data;
        }

        return data;
    }

    usuarioAutenticado (){
        return localStorage.getItem("token") != undefined ? true : false
    }

    async logout(){
        localStorage.removeItem("");
        localStorage.removeItem("");
        localStorage.removeItem("");
    }
}