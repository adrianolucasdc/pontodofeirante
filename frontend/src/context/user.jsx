import { useState, createContext, useEffect} from "react";
import UserServices from "../Services/UserService";
import Cookies from "universal-cookie"



const cookies = new Cookies();
export const UserContext = createContext({});
const userService = new UserServices();

export default function UserProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [tokenUser, setTokenUser] = useState(cookies.get("t0k3N_user"))
    const [tokenStore, setTokenStore] = useState(cookies.get("t0k3N_store"))

    function updateToken(){
        setTokenUser(cookies.get("t0k3N_user"))
        setTokenStore(cookies.get("t0k3N_store"))
    }

    useEffect(() => {
        async function checkAuthentication() {
            const isLogged = await userService.userAutheticatedUser(tokenUser);
            setIsAuthenticated(isLogged);
          }
        checkAuthentication();
      }, [tokenUser]);


    return(
        <UserContext.Provider value={ {isAuthenticated: isAuthenticated, updateToken} }>
            {children}
        </UserContext.Provider>
    )
}